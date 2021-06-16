import { Router } from 'express'
import ExamController from './controller'
const router = Router()

router.get('/get/', ExamController.getData)

export default router
