import express from 'express'
import path from 'path'
import fetch from 'node-fetch'
import base64 from 'base-64'
import ApplicantsRouter from './applicants/routes'
import ClientRouter from './client/routes'
import ExamRouter from './exam/routes'
import { writeFileSync } from 'fs'
import { parseApplicantsList, parseRatingList, parseExamList } from './service'
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000

// const APPLICANTS_URL = process.env.APPLICANTS_URL
// const RATING_URL = process.env.RATING_URL
// const EXAM_URL = process.env.EXAM_URL
// const FETCH_INTERVAL = parseInt(process.env.FETCH_INTERVAL || '300000')
// const LOGIN = process.env.LOGIN
// const PASSWORD = process.env.PASSWORD

app.use('/static', express.static(path.join(__dirname, '../', 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/applicants', ApplicantsRouter)
app.use('/api/exam', ExamRouter)
app.use('/', ClientRouter)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../', 'templates'))

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}!`))

// setInterval(async () => {
//   let resp = await fetch(APPLICANTS_URL!, {
//     headers: {
//       Authorization: 'Basic' + base64.encode(LOGIN! + ':' + PASSWORD!),
//     },
//   })
//   let data = await resp.json()
//   writeFileSync(
//     path.join(__dirname, '../', 'static', 'applicants.json'),
//     JSON.stringify(parseApplicantsList(data))
//   )

//   resp = await fetch(RATING_URL!)
//   data = await resp.json()
//   writeFileSync(
//     path.join(__dirname, '../', 'static', 'rating.json'),
//     JSON.stringify(parseRatingList(data))
//   )
//   resp = await fetch(EXAM_URL!)
//   data = await resp.json()
//   writeFileSync(
//     path.join(__dirname, '../', 'static', 'exam.json'),
//     JSON.stringify(parseExamList(data))
//   )
// }, FETCH_INTERVAL)
