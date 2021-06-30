"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./applicants/routes"));
var routes_2 = __importDefault(require("./client/routes"));
var routes_3 = __importDefault(require("./exam/routes"));
require('dotenv').config();
var app = express_1.default();
var PORT = process.env.PORT || 5000;
// const APPLICANTS_URL = process.env.APPLICANTS_URL
// const RATING_URL = process.env.RATING_URL
// const EXAM_URL = process.env.EXAM_URL
// const FETCH_INTERVAL = parseInt(process.env.FETCH_INTERVAL || '300000')
// const LOGIN = process.env.LOGIN
// const PASSWORD = process.env.PASSWORD
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../', 'static')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/api/applicants', routes_1.default);
app.use('/api/exam', routes_3.default);
app.use('/', routes_2.default);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../', 'templates'));
app.listen(PORT, function () { return console.log("Server has been started on port " + PORT + "!"); });
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
