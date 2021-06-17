import path from 'path'
import { Request, Response } from 'express'
import { readFile } from '../service'

class ExamController {
  getData(req: Request, res: Response) {
    const data = readFile(
      path.join(path.join(__dirname, '../', '../', 'static', 'exam.json'))
    )
    res.json(data || [])
  }
}

export default new ExamController()
