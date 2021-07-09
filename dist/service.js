"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseExamList = exports.parseRatingList = exports.parseApplicantsList = exports.readFile = void 0;
var fs_1 = __importDefault(require("fs"));
function readFile(path) {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf-8'));
}
exports.readFile = readFile;
function parseApplicantsList(data) {
    var list = [];
    var idx = -1;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var el = data_1[_i];
        var abs = [];
        for (var i = 0; i < el.Abits.length; i++) {
            idx++;
            var a = el.Abits[i];
            a.Napravlenie = el.Napravlenie.replace('/', '|');
            a.Osnovanie = el.Osnovanie;
            a.IDs = el.IDs || [];
            a.TrainingLevel = el.TrainingLevel;
            a.Form = el.Form;
            a.Plan = el.Plan;
            a.Vstupitelnie = a.Vstupitelnie.map(function (el) {
                return el.replace('Предмет: ', '').replace(', форма испытания:', ',');
            });
            a.idx = idx;
            abs.push(a);
        }
        list = list.concat(abs);
    }
    return list;
}
exports.parseApplicantsList = parseApplicantsList;
function parseRatingList(data) {
    return data;
}
exports.parseRatingList = parseRatingList;
function parseExamList(data) {
    return data;
}
exports.parseExamList = parseExamList;
