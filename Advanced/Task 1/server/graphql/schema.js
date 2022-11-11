import { buildSchema } from "graphql"

import regionSchema from './schemas/region.js'

export default buildSchema(`
    ${regionSchema.Region}
    ${regionSchema.RegionInput}

    type RootQuery {
        ${regionSchema.RegionQueries}
    }
    
    type RootMutation {
        ${regionSchema.RegionMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)
