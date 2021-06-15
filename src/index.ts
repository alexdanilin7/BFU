import express from 'express'
import path from 'path'
import fetch from 'node-fetch'
import ApplicantsRouter from './applicants/routes'
import ClientRouter from './client/routes'
import { writeFileSync } from 'fs'
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000
const BFU_URL = process.env.BFU_URL

app.use('/static', express.static(path.join(__dirname, '../', 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/applicants', ApplicantsRouter)
app.use('/', ClientRouter)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../', 'templates'))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}!`))

setInterval(async () => {
  const resp = await fetch(BFU_URL!)
  const data = await resp.json()

  // writeFileSync(
  //   path.join(__dirname, '../', 'static', 'applicants.json'),
  //   JSON.stringify(data)
  // )
}, 300000)
