require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const authRoutes = require("./routes/authRoutes")
const todoRoutes = require("./routes/todos");
const authMiddleware = require("./middleware/authMiddleware");

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', // آدرس Frontend
  credentials: true
}))
app.use(express.json())

app.use("/api/auth", authRoutes)

app.use("/api/todos", todoRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/todo-db")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.listen(5000, () => {
  console.log("Server running on port 5000")
})




app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You accessed a protected route",
    user: req.user,
  });
});