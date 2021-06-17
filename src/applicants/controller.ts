import path from 'path'
import { writeFileSync } from 'fs'
import { Request, Response } from 'express'
import { readFile } from '../service'
import { Applicant } from './types'

class ApplicantsController {
  getData(req: Request, res: Response) {
    const data = readFile(
      path.join(path.join(__dirname, '../', '../', 'static', 'applicants.json'))
    )
    res.json(data || [])
  }

  getDetail(req: Request, res: Response) {
    const { id } = req.params
    const data: Applicant[] = readFile(
      path.join(__dirname, '../', '../', 'static', 'applicants.json')
    )
    res.json(data.find((el, idx) => idx.toString() === id) || {})
  }
}

export default new ApplicantsController()
