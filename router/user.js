const express = require("express")
const router = express.Router()
const db = require("../config/database")
const user = require("../models/user")
const _ = require("lodash")

router.get("/", (req, res) => {
  user
    .findAll({
      attributes: ["id", "firstname", "lastname", "username", "email", "type"]
    })
    .then(user => {
      res.json(user)
    })
})

module.exports = router
