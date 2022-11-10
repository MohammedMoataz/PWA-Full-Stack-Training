import nodemailer from 'nodemailer'

import Mail from '../models/mailModel.js'

export const sendMail = async (req, res) => {
    const mail = new Mail(req.body)

    try {
        const emailCong = {
            service: 'Gmail',
            host: "smtp.ethereal.email",
            auth: {
                type: 'login',
                user: 'mohammedrambo326@gmail.com',
                pass: 'vzkiyvrmhsxmbgnm',
            },
            tls: {
                rejectUnauthorized: false
            }
        }

        const transporter = nodemailer.createTransport(emailCong)

        const info = await transporter.sendMail(mail)

        res.status(200).json(info)

    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const welcomeMessage = (req, res) => {
    res.send('Welcome to my serverApp')
}
