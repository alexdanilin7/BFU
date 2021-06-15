import { Request, Response } from 'express'

class ClientController {
  applicantsList(req: Request, res: Response) {
    res.render('applicants/list')
  }

  applicantsDetail(req: Request, res: Response) {
    res.render('applicants/detail')
  }
}

export default new ClientController()
