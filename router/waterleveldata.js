const express = require("express")
const app = express()
const db = require("../config/database")
const router = express.Router()
const waterlevel = require("../models/waterlevel")

router.get("/", (req, res) => {
  waterlevel
    .findAll()
    .then(response => {
      res.json(response)
    })
    .catch(error => console.log(error))
})

module.exports = router
