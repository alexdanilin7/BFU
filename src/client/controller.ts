import { Request, Response } from 'express'

class ClientController {
  applicantsList1(req: Request, res: Response) {
    res.render('applicants/list1')
  }

  applicantsList2(req: Request, res: Response) {
    const { id } = req.params

    res.render('applicants/list2', { id })
  }

  applicantsList3(req: Request, res: Response) {
    const { id1, id2 } = req.params

    res.render('applicants/list3', { id1, id2 })
  }

  applicantsDetail(req: Request, res: Response) {
    res.render('applicants/detail')
  }

  applicantsStatistic(req: Request, res: Response) {
    res.render('statistic/applicants')
  }

  applicantsAnalitics(req: Request, res: Response) {
    res.render('statistic/applicants_analitisc')
  }

  examList1(req: Request, res: Response) {
    res.render('exam/list1')
  }

  examList2(req: Request, res: Response) {
    res.render('exam/list2')
  }

  examList3(req: Request, res: Response) {
    res.render('exam/list3')
  }

  ratingSpoList1(req: Request, res: Response) {
    res.render('rating/spo9/list1')
  }

  ratingSpoList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/spo9/list2', { id })
  }

  ratingSpo11List1(req: Request, res: Response) {
    res.render('rating/spo11/list1')
  }

  ratingSpo11List2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/spo11/list2', { id })
  }

  ratingBakList1(req: Request, res: Response) {
    res.render('rating/bak/list1')
  }

  ratingBakList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/bak/list2', { id })
  }

  ratingMagList1(req: Request, res: Response) {
    res.render('rating/mag/list1')
  }

  ratingMagList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/mag/list2', { id })
  }

  ratingSpecList1(req: Request, res: Response) {
    res.render('rating/spec/list1')
  }

  ratingSpecList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/spec/list2', { id })
  }

  ratingOrdList1(req: Request, res: Response) {
    res.render('rating/ord/list1')
  }

  ratingOrdList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/ord/list2', { id })
  }

  ratingApsList1(req: Request, res: Response) {
    res.render('rating/asp/list1')
  }

  ratingApsList2(req: Request, res: Response) {
    const { id } = req.params
    res.render('rating/asp/list2', { id })
  }
}

export default new ClientController()
