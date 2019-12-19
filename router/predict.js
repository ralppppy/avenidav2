const express = require("express")
const router = express.Router()
const firebase = require("firebase")
const brain = require("brain.js")

/**
 * Long short-term memory (LSTM) is an artificial recurrent neural network (RNN) architecture
 *  used in the field of deep learning. Unlike standard feedforward neural networks,
 *  LSTM has feedback connections. It can not only process single data points (such as images),
 * but also entire sequences of data (such as speech or video). For example,
 *  LSTM is applicable to tasks such as unsegmented, connected handwriting recognition,
 * speech recognition and anomaly detection in network traffic or IDS's
 * (intrusion detection systems).
 * source: https://en.wikipedia.org/wiki/Long_short-term_memory
 *
 * This line of codes uses brain.js
 * https://github.com/BrainJS/brain.js
 *
 * This will predict the next number base on the sequence of numbers given as an input
 * in net.train([[<arrayofinputs>]]) -> net.train() accepts two dimensional array
 * ex input [1,2,3,4,5,6,7,8,9,10]
 * it will look like this net.train([[1,2,3,4,5,6,7,8,9,10]])
 *
 * net.run() -> accepts an array that will be a basis on what will be the prediction
 * ex. net.run([7, 8, 9]) -> the output will be 10 because of the training data/datasets
 * that we've pass in net.train()
 * other example net.run([3, 4, 5]) output ->  6
 */

router.post("/", (req, res) => {
  //meterArr is passed from frontend
  let { meterArr } = req.body

  //create an object / initializing brain.js LSTMT
  const net = new brain.recurrent.LSTMTimeStep()

  //begin the training proccess
  net.train([meterArr])

  //Getting the latest three water level data we will use this  in net.run() it will
  //be the basis of the prediction
  let lastThree = meterArr.slice(Math.max(meterArr.length - 3, 1))

  //Predicting process
  const output = net.run(lastThree) // 3

  //returning the predicted value into the frontend
  res.json({ prediction: output })
})

module.exports = router
