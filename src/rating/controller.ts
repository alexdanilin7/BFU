import path from 'path'
import { Request, Response } from 'express'
import { readFile } from '../applicants/service'

class RatingController {
  getData(req: Request, res: Response) {
    const data = readFile(
      path.join(path.join(__dirname, '../', '../', 'static', 'rating.json'))
    )
    res.json(data || [])
  }
}

export default new RatingController()
