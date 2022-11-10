import { Router } from 'express'
import {
  getAllUsers,
  userRegistration,
  userLogin,
  getUserById,
  updateUserById,
  deleteUserById,
  getUserByEmail
} from '../controllers/userController.js'

const router = Router()

router
  .route("/getAll")
  .get(getAllUsers)

router
  .route("/registration")
  .post(userRegistration)

router
  .route("/login")
  .put(userLogin)

router
  .route("/getEmail")
  .put(getUserByEmail)

router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById)

export default router