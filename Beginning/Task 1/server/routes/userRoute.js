import { Router } from 'express'
import { getAllUsers, createNewUser, getUserById } from '../controllers/userController.js'

const router = Router()

router.route("/")
  .post(createNewUser)
  .get(getAllUsers)

var v
router.route("/data")
  .post((req, res) => {
    v = req.body.data
    console.log(req.body.data)
    res.status(200)
  })
  .get((req, res) => {
    console.log(res.data)
    console.log(v)
    res.send(v)
  })

router.route("/:id")
  .get(getUserById)

export default router;