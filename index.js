const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./config/database")
const waterleveldata = require("./router/waterleveldata")
const createwaterleveldata = require("./router/createwaterleveldata")
const createpdf = require("./router/createpdf")
const login = require("./router/login")
const user = require("./router/user")
const predict = require("./router/predict")
const path = require("path")

require("dotenv").config()

const PORT = process.env.PORT || 3005
console.log(PORT)

let corsOptions = { origin: true, credentials: true }
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors(corsOptions))

db.authenticate()
  .then(response => {
    console.log("Conneted")
  })
  .catch(error => console.log("Error " + error))

app.use("/api/get/waterleveldata", waterleveldata)

app.use("/api/post/waterleveldata", createwaterleveldata)
app.use("/api/pdf", createpdf)
app.use("/api/post/login", login)
app.use("/api/predict", predict)

//USERS ROUTE
app.use("/api/get/users", user)

//if (process.env.NODE_ENV === "production") {
app.use(express.static("./build"))

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
})
//}

app.listen(PORT, () => {
  console.log(`Port Listening in port  ${PORT}`)
})
