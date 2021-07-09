"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseApplicantsList = exports.readFile = void 0;
var fs_1 = __importDefault(require("fs"));
function readFile(path) {
    return JSON.parse(fs_1.default.readFileSync(path, 'utf-8'));
}
exports.readFile = readFile;
function parseApplicantsList(data) {
    var list = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var el = data_1[_i];
        var abs = [];
        for (var i = 0; i < el.Abits.length; i++) {
            var a = el.Abits[i];
            a.Napravlenie = el.Napravlenie;
            a.Osnovanie = el.Osnovanie;
            a.IDs = el.IDs || [];
            abs.push(a);
        }
        list = list.concat(abs);
    }
    return list;
}
exports.parseApplicantsList = parseApplicantsList;
