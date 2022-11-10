import express, { json, urlencoded } from 'express'
import cors from 'cors'

import mailRoute from './routes/emailRoute.js'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/', mailRoute)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server lestening on port: ${PORT}`))
