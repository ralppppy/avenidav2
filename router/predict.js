const express = require("express")
const router = express.Router()
const firebase = require("firebase")
const brain = require("brain.js")

router.post("/", (req, res) => {
  let { meterArr } = req.body

  const net = new brain.recurrent.LSTMTimeStep()

  net.train([meterArr])
  let lastThree = meterArr.slice(Math.max(meterArr.length - 3, 1))

  const output = net.run(lastThree) // 3

  res.json({ prediction: output })
})

module.exports = router
