import { buildSchema } from "graphql"

import userSchema from './schemas/user.js'

export default buildSchema(`
    ${userSchema.User}
    ${userSchema.UserInput}

    type RootQuery {
        ${userSchema.UserQueries}
    }
    
    type RootMutation {
        ${userSchema.UserMutations}
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`)