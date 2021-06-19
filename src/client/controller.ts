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

  examList1(req: Request, res: Response) {
    res.render('exam/list1')
  }

  examList2(req: Request, res: Response) {
    res.render('exam/list2')
  }

  examList3(req: Request, res: Response) {
    res.render('exam/list3')
  }

  ratingList1(req: Request, res: Response) {
    res.render('rating/list1')
  }

  ratingList2(req: Request, res: Response) {
    res.render('rating/list2')
  }
}

export default new ClientController()
