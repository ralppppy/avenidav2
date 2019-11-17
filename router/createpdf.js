const express = require("express")
const router = express.Router()
const pdf = require("html-pdf")
const pdftemplate = require("../documents/pdftemplate")

router.post("/create-pdf-report", (req, res) => {
  pdf
    .create(pdftemplate(), { height: "1366px", width: "8in" })
    .toFile("./router/report.pdf", error => {
      console.log("Error " + error)
      if (error) {
        res.send(Promise.reject())
      }

      res.send(Promise.resolve())
    })
})

router.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/report.pdf`)
})

module.exports = router
