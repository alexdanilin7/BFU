export interface Applicant {
  FIO: string
  DPZ: string | Date
  Napravlenie: string
  Osnovanie: string
  IDs: ID[]
}

export interface ID {
  ID: string
  Ocenka: string
}
