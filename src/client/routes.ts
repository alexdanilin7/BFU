import { Router } from 'express'
import ClientController from './controller'
const router = Router()

router.get('/', ClientController.applicantsList1)
router.get('/:id', ClientController.applicantsList2)
router.get('/statistic/applicants/', ClientController.applicantsStatistic)
router.get('/analitics/applicants/', ClientController.applicantsAnalitics)
router.get('/applicants/:id', ClientController.applicantsDetail)
router.get('/:id1/:id2', ClientController.applicantsList3)
router.get('/exam/', ClientController.examList1)
router.get('/exam/:id', ClientController.examList2)
router.get('/exam/:id/:idx', ClientController.examList3)
router.get('/rating/', ClientController.ratingList1)
router.get('/rating/:id', ClientController.ratingList2)

export default router
