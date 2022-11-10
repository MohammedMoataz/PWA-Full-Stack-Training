export default {
    //  User entity
    User: `
        scalar Date
        type User {
            intUserID: Int
            strName: String
            dtmDOB: Date
            strEmail: String
            strPassword: String
            blnIsActive: Boolean
        }
    `,

    //  User input
    UserInput: `
        input UserInput {
            intUserID: Int
            strName: String
            dtmDOB: Date
            strEmail: String
            strPassword: String
            blnIsActive: Boolean
        }
    `,

    //  User queries
    UserQueries: `
        getUserByID(intUserID: Int!): User!
        loginUser(strEmail: String!, strPassword: String!): User!
        getAllUsers: [User!]!
        getUsersByEmail(strEmail: String!): [User]
    `,

    //  User mutations
    UserMutations: `
        addUser(userInput: UserInput): User
        updateUser(strEmail: String, userInput: UserInput): User
        deleteUser(intUserID: Int!): String
        updateUserStatus(strEmail: String, blnIsActive: Boolean): User
    `
}