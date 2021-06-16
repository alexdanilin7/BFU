import { Router } from 'express'
import RatingController from './controller'
const router = Router()

router.get('/get/', RatingController.getData)

export default router
