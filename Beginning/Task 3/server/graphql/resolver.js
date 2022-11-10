import {
    getUserByID,
    loginUser,
    getAllUsers,
    getUsersByEmail,
    addUser,
    updateUser,
    deleteUser,
    updateUserStatus
} from './resolvers/user.js'

const rootResolver = {
    getUserByID,
    loginUser,
    getAllUsers,
    getUsersByEmail,
    addUser,
    updateUser,
    deleteUser,
    updateUserStatus
}

export default rootResolver