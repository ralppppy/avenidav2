const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const db = require("../config/database")
const user = require("../models/user")

router.post("/", verifyUser, (req, res) => {
  res.json({ verified: true, message: "Success", token: req.token })
})

function verifyUser(req, res, next) {
  let { username, password } = req.body
  let plainPassword = password
  //console.log(username, password)

  user.findAll({ where: { username } }).then(resp => {
    let response = resp[0]
    if (typeof response !== "undefined") {
      let { password } = response.dataValues
      //console.log(password)

      bcrypt.compare(plainPassword, password, (err, resBcrypt) => {
        if (err) {
          res.sendStatus(403)
          console.log(err)
        } else {
          if (resBcrypt) {
            let { firstname, lastname, email, type } = response.dataValues
            const userData = { firstname, lastname, email, type }
            jwt.sign(userData, "secret", (err, token) => {
              if (err) {
                res.json(err)
              } else {
                req.token = token
                next()
              }
            })
          } else {
            res.json({
              verified: false,
              message: "Invalid Username or Password"
            })
          }
        }
      })
    } else {
      res.json({ verified: false, message: "Invalid Username or Password" })
    }
  })
}

module.exports = router
