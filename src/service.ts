import fs from 'fs'

export function readFile(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

export function parseApplicantsList(data: any): any {
  let list: any[] = []
  let idx = -1
  for (const el of data) {
    const abs = []
    for (let i = 0; i < el.Abits.length; i++) {
      idx++
      const a = el.Abits[i]
      a.Napravlenie = el.Napravlenie.replace('/', '|')
      a.Osnovanie = el.Osnovanie
      a.IDs = el.IDs || []
      a.TrainingLevel = el.TrainingLevel
      a.Form = el.Form
      a.Plan = el.Plan
      a.Vstupitelnie = a.Vstupitelnie.map((el: string) => {
        return el.replace('Предмет: ', '').replace(', форма испытания:', ',')
      })
      a.idx = idx

      abs.push(a)
    }
    list = list.concat(abs)
  }
  return list
}

export function parseRatingList(data: any): any {
  return data
}

export function parseExamList(data: any): any {
  return data
}
