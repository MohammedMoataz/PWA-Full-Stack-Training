import cors from 'cors'
import express from "express"
import { config } from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import bodyParser from 'body-parser'

import graphQlSchema from './graphql/schema.js'
import graphQlResolvers from './graphql/resolver.js'
import db from './database/database.js'
import uploadFiles from './middleware/uploadFiles.js'

config() // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV
const PORT = process.env.PORT || 4001
const app = express()

//  Database Authentication
db.sequelize.authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening at http://localhost:${PORT}`)
        })
    })
    .catch(err => console.log('ERROR: ' + err))

app.use(cors())

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) // parse json bodies in the request object


//  http://localhost:4000/graphql/
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))

const homeRoute = (req, res) =>
    res.send(`Go to <a href="http://localhost:${PORT}/graphql/"><h1>GraphQl</h1><a/>`)

const allRoutes = (req, res) => res.send("You've tried reaching a route that doesn't exist.")

//  http://localhost:4000/
app.use('/uploadFiles', uploadFiles)
app.get('/', homeRoute)
app.all('*', allRoutes)
