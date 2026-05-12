const express = require("express")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")

app.use("/api/auth", authRoutes)


const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "API running" })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
