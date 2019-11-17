const express = require("express")
const router = express.Router()
const db = require("../config/database")
const waterlevel = require("../models/waterlevel")

router.post("/", (req, res) => {
  let wlmeter = 5
  let wlfeet = 100

  let data = { wlmeter, wlfeet }

  waterlevel
    .create(data)
    .then(response => {
      res.json(response)
    })
    .catch(error => console.log(error))
})

module.exports = router
