require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/todo-db")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.listen(5000, () => {
  console.log("Server running on port 5000")
})
