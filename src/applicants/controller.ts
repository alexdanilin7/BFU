import path from 'path'
import { writeFileSync } from 'fs'
import { Request, Response } from 'express'
import { readFile, parseList } from './service'
import { Applicant } from './types'

class ApplicantsController {
  setData(req: Request, res: Response) {
    let hasError = false

    writeFileSync(
      path.join(__dirname, '../', '../', 'static', 'applicants.json'),
      JSON.stringify(parseList(req.body))
    )

    if (hasError) return res.status(500).json({})
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
    res.json(data.find((el, idx) => idx.toString() === id) || {})
  }
}

export default new ApplicantsController()
