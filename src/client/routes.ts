import { Router } from 'express'
import ClientController from './controller'
const router = Router()

router.get('/', ClientController.applicantsList1)
router.get('/:id', ClientController.applicantsList2)
router.get('/statistic/applicants/', ClientController.applicantsStatistic)
router.get('/analitics/applicants/', ClientController.applicantsAnalitics)
router.get('/rating/spo9/', ClientController.ratingSpoList1)
router.get('/rating/spo9/:id', ClientController.ratingSpoList2)
router.get('/rating/spo11/', ClientController.ratingSpo11List1)
router.get('/rating/spo11/:id', ClientController.ratingSpo11List2)
router.get('/rating/bak/', ClientController.ratingBakList1)
router.get('/rating/bak/:id', ClientController.ratingBakList2)
router.get('/rating/mag/', ClientController.ratingMagList1)
router.get('/rating/mag/:id', ClientController.ratingMagList2)
router.get('/rating/spec/', ClientController.ratingSpecList1)
router.get('/rating/spec/:id', ClientController.ratingSpecList2)
router.get('/rating/ord/', ClientController.ratingOrdList1)
router.get('/rating/ord/:id', ClientController.ratingOrdList2)
router.get('/rating/asp/', ClientController.ratingApsList1)
router.get('/rating/asp/:id', ClientController.ratingApsList2)
router.get('/applicants/:id', ClientController.applicantsDetail)
router.get('/:id1/:id2', ClientController.applicantsList3)
router.get('/exam/', ClientController.examList1)
router.get('/exam/:id', ClientController.examList2)
router.get('/exam/:id/:idx', ClientController.examList3)

export default router
