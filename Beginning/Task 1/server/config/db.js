import mysql2 from 'mysql2'
import { config } from 'dotenv'

config() // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV

export const connection = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
})

export default connection.promise()