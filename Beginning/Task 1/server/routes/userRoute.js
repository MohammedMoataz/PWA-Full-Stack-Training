import { Router } from 'express'
import { getAllUsers, createNewUser, getUserById } from '../controllers/userController.js'

const router = Router()

router.route("/")
  .post(createNewUser)
  .get(getAllUsers)

router.route("/:id")
  .get(getUserById)

export default router;