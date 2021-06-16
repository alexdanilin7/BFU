import { Router } from 'express'
import ClientController from './controller'
const router = Router()

router.get('/', ClientController.applicantsList)
router.get('/exam/', ClientController.examList1)
router.get('/exam/:id', ClientController.examList2)
router.get('/exam/:id/:idx', ClientController.examList3)
router.get('/rating/', ClientController.ratingList1)
router.get('/rating/:id', ClientController.ratingList2)
router.get('/:id', ClientController.applicantsDetail)

export default router
