import { Router } from 'express'
import ApplicantsController from './controller'
const router = Router()

router.get('/get/', ApplicantsController.getData)
router.get('/get/:id', ApplicantsController.getDetail)
// router.post('/set/', ApplicantsController.setData)

export default router
