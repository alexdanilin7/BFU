"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var service_1 = require("../service");
var ExamController = /** @class */ (function () {
    function ExamController() {
    }
    ExamController.prototype.getData = function (req, res) {
        var data = service_1.readFile(path_1.default.join(path_1.default.join(__dirname, '../', '../', 'static', 'exam.json')));
        res.json(data || []);
    };
    return ExamController;
}());
exports.default = new ExamController();
