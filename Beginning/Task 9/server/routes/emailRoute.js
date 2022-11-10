import { Router } from 'express'

import { sendMail, welcomeMessage } from '../controllers/emailController.js'

const router = Router()

router
    .route('/sendmail')
    .post(sendMail)

router
    .route('/')
    .get(welcomeMessage)

export default router