import { Router } from 'express'
import {
  getAllReels,
  createReel,
  getReelById,
  updateReelById,
  deleteReelById
} from '../controllers/reelController.js'

const router = Router()

router
  .route("/getAll")
  .get(getAllReels)

router
  .route("/")
  .post(createReel)

router
  .route("/:id")
  .get(getReelById)
  .put(updateReelById)
  .delete(deleteReelById)

export default router