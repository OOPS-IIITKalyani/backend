const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors({
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

const userRouter = require("./routes/patient.routes.js")
const healthcheckRouter = require("./routes/healthcheck.routes.js")
const predictionRouter = require("./routes/predictor.routes.js")


//routes declaration
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/predictor", predictionRouter)

// http://localhost:8000/api/v1/users/register

module.exports = app