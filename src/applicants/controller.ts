import path from 'path'
import { writeFileSync } from 'fs'
import { Request, Response } from 'express'
import { readFile } from '../service'
import { Applicant } from './types'
import { parseApplicantsList } from '../service'

class ApplicantsController {
  setData(req: Request, res: Response) {
    const data = req.body
    writeFileSync(
      path.join(__dirname, '../', '../', 'static', 'applicants.json'),
      JSON.stringify(parseApplicantsList(data))
    )
    res.status(201).json({})
  }

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
    res.json(data.find((el, idx: number) => idx.toString() === id) || {})
  }
}

export default new ApplicantsController()
