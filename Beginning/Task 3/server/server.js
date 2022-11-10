import cors from 'cors'
import express from "express"
import { graphqlHTTP } from 'express-graphql'

import graphQlSchema from './graphql/schema.js'
import graphQlResolvers from './graphql/resolver.js'
import db from './database/database.js'


const app = express()

app.use(cors())

const PORT = process.env.PORT || 3000

//  Database Authentication
db.sequelize.authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening at http://localhost:${PORT}`)
        })
    })
    .catch(err => console.log('ERROR: ' + err))

//  http://localhost:4000/graphql/
app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}))


//  http://localhost:4000/
app.get('/', (req, res) => {
    res.send(`Go to <a href="http://localhost:${PORT}/graphql/"><h1>GraphQl</h1><a/>`)
})