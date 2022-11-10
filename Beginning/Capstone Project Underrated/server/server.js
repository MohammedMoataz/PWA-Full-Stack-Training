import cors from 'cors'
import express, { json, urlencoded } from "express"
import { config } from 'dotenv'

import userRoutes from "./routes/userRoute.js"
import reelRoutes from "./routes/reelRoutes.js"
import uploadFile from './controllers/fileController.js'
import mailRoute from './routes/emailRoute.js'

config() // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV
const PORT = process.env.PORT || 4001

const app = express()

// Middleware
app.use(cors())
app.use(json({ limit: '50mb' })) // parse json bodies in the request object
app.use(urlencoded({ extended: true, limit: '50mb' }))

//  Routes
app.use("/user", userRoutes)
app.use("/reel", reelRoutes)
app.use('/uploadfile', uploadFile)
app.use('/mail', mailRoute)
app.get("/", (req, res) => {
    res.redirect('http://localhost:3000')
})
app.get("*", (req, res) => {
    res.send("You've tried reaching a route that doesn't exist.")
})

//  http://localhost:4000/
app.listen(PORT, () => {
    console.log(`Server is Listening on http://localhost:${PORT}`)
})

//  Global Error Handler. IMPORTANT function params MUST start with err
app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message: err,
    })
})
