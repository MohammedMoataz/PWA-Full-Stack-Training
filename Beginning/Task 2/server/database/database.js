import Sequelize from 'sequelize'
import { config } from 'dotenv'

import UserModel from "./models/user.js";

const db = {}
config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.tblUser = UserModel(sequelize, Sequelize)

export default db