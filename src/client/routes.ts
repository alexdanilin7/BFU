import { Router } from 'express'
import ClientController from './controller'
const router = Router()

router.get('/', ClientController.applicantsList)
router.get('/:id', ClientController.applicantsDetail)

export default router
