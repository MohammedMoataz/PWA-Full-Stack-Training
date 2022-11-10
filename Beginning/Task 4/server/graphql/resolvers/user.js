import Sequelize from 'sequelize'

import db from '../../database/database.js'

const Op = Sequelize.Op
const tblUser = db.tblUser

//  User Queries
export const getUserByID = async (args, req) => {
    try {
        return await tblUser.findOne({
            where: {
                intUserID: args.intUserID
            }
        })
    } catch (err) {
        throw err
    }
}

export const loginUser = async (args, req) => {
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
}

export const getAllUsers = async (args, req) => {
    try {
        return await tblUser.findAll()
    } catch (err) {
        throw err
    }
}

export const getUsersByEmail = async (args, req) => {
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
}


//  User Mutations
export const addUser = async (args, req) => {
    try {
        console.log(
            "\nstrName: " + args.userInput.strName,
            "\ndtmDOB: " + args.userInput.dtmDOB,
            "\nstrEmail: " + args.userInput.strEmail,
            "\nstrPassword: " + args.userInput.strPassword,
            "\nblnIsActive: " + 0
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
}

export const updateUser = async (args, req) => {
    try {
        const isUserUpdated = await tblUser.update({
            strName: args.userInput.strName,
            dtmDOB: args.userInput.dtmDOB,
            strPassword: args.userInput.strPassword,
            blnIsActive: args.userInput.blnIsActive
        }, {
            where: { strEmail: args.strEmail }
        })

        console.log(
            "\nstrName: " + args.userInput.strName,
            "\nstrEmail: " + args.userInput.strEmail,
            "\ndtmDOB: " + args.userInput.dtmDOB,
            "\nstrPassword: " + args.userInput.strPassword,
            "\nblnIsActive: " + args.userInput.blnIsActive,
            "\nisUserUpdated: " + isUserUpdated
        )

        return isUserUpdated !== 0;
    } catch (err) {
        throw err
    }
}

export const deleteUser = async (args, req) => {
    try {
        const userExist = await tblUser.findOne({
            where: {
                intUserID: args.intUserID
            }
        })

        if (userExist) {
            tblUser.destroy({
                where: { intUserID: args.intUserID }
            })
            return `User with ID: ${args.intUserID} has been deleted`
        } else {
            return `User with ID: ${args.intUserID} not found`
        }


    } catch (err) {
        throw err
    }
}

export const updateUserStatus = async (args, req) => {
    try {
        const [isUserUpdated] = await tblUser.update({
            blnIsActive: args.blnIsActive
        }, {
            where: { strEmail: args.strEmail }
        })

        return isUserUpdated !== 0;
    } catch (err) {
        throw err
    }
}
