import { buildSchema } from "graphql"

import locationSchema from './schemas/location.js'

export default buildSchema(`
    ${locationSchema.Location}
    ${locationSchema.LocationInput}

    type RootQuery {
        ${locationSchema.LocationQueries}
    }
    
    type RootMutation {
        ${locationSchema.LocationMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
