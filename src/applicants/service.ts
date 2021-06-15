import fs from 'fs'

export function readFile(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}

export function parseList(data: any[]): any[] {
  let list: any[] = []

  for (const el of data) {
    const abs = []
    for (let i = 0; i < el.Abits.length; i++) {
      const a = el.Abits[i]
      a.Napravlenie = el.Napravlenie
      a.Osnovanie = el.Osnovanie
      a.IDs = el.IDs || []

      abs.push(a)
    }
    list = list.concat(abs)
  }
  return list
}
