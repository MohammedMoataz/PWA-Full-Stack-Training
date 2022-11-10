import Sequelize from 'sequelize'

import db from '../../database/database.js'

const Op = Sequelize.Op
const tblUser = db.tblUser

export default {
    //  User Queries
    getUserByID: async (args, req) => {
        try {
            return await tblUser.findOne({
                where: {
                    intUserID: args.intUserID
                }
            })
        } catch (err) {
            throw err
        }
    },

    loginUser: async (args, req) => {
        try {
            return await tblUser.findOne({
                where: {
                    strEmail: args.strEmail,
                    strPassword: args.strPassword
                }
            })
        } catch (err) {
            throw err
        }
    },

    getAllUsers: async (args, req) => {
        try {
            return await tblUser.findAll()
        } catch (err) {
            throw err
        }
    },

    getUsersByEmail: async (args, req) => {
        try {
            return await tblUser.findAll({
                where: {
                    strEmail: {
                        [Op.like]: '%' + args.strEmail + '%'
                    }
                }
            })
        } catch (err) {
            throw err
        }
    },


    //  User Mutations
    addUser: async (args, req) => {
        try {
            console.log(
                "strName: " + args.userInput.strName,
                "dtmDOB: " + args.userInput.dtmDOB,
                "strEmail: " + args.userInput.strEmail,
                "strPassword: " + args.userInput.strPassword,
                "blnIsActive: " + 0
            )

            const userExist = await tblUser.findOne({
                where: {
                    strEmail: args.userInput.strEmail
                }
            })

            if (userExist) {
                throw new Error('User already exists')
            }

            const newUser = new tblUser({
                strName: args.userInput.strName,
                dtmDOB: args.userInput.dtmDOB,
                strEmail: args.userInput.strEmail,
                strPassword: args.userInput.strPassword,
                blnIsActive: 0
            })

            return await newUser.save()

        } catch (err) {
            throw err
        }
    },

    updateUser: async (args, req) => {
        try {
            console.log(args.strEmail, args.userInput.strName)

            const isUserUpdated = await tblUser.update({
                strName: args.userInput.strName,
                dtmDOB: args.userInput.dtmDOB,
                strPassword: args.userInput.strPassword,
                blnIsActive: args.userInput.blnIsActive
            }, {
                where: { strEmail: args.strEmail }
            })

            console.log(
                "strName: " + args.userInput.strName,
                "dtmDOB: " + args.userInput.dtmDOB,
                "strPassword: " + args.userInput.strPassword,
                "blnIsActive: " + args.userInput.blnIsActive,
                "isUserUpdated: " + isUserUpdated
            )

            if (isUserUpdated === 0)
                return false
            else
                return true
        } catch (err) {
            throw err
        }
    },

    deleteUser: async (args, req) => {
        try {
            tblUser.destroy({
                where: { intUserID: args.intUserID }
            })
            return `User with ID: ${args.intUserID} has been deleted`
        } catch (err) {
            throw err
        }
    },

    updateUserStatus: async (args, req) => {
        try {
            const [isUserUpdated] = await tblUser.update({
                blnIsActive: args.blnIsActive
            }, {
                where: { strEmail: args.strEmail }
            })

            if (isUserUpdated === 0)
                return false
            else
                return true
        } catch (err) {
            throw err
        }
    }
}