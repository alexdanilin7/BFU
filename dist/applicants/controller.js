"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = require("fs");
var service_1 = require("../service");
var service_2 = require("../service");
var ApplicantsController = /** @class */ (function () {
    function ApplicantsController() {
    }
    ApplicantsController.prototype.setData = function (req, res) {
        var data = req.body;
        fs_1.writeFileSync(path_1.default.join(__dirname, '../', '../', 'static', 'applicants.json'), JSON.stringify(service_2.parseApplicantsList(data)));
        res.status(201).json({});
    };
    ApplicantsController.prototype.getData = function (req, res) {
        var data = service_1.readFile(path_1.default.join(path_1.default.join(__dirname, '../', '../', 'static', 'applicants.json')));
        res.json(data || []);
    };
    ApplicantsController.prototype.getDetail = function (req, res) {
        var id = req.params.id;
        var data = service_1.readFile(path_1.default.join(__dirname, '../', '../', 'static', 'applicants.json'));
        res.json(data.find(function (el, idx) { return idx.toString() === id; }) || {});
    };
    return ApplicantsController;
}());
exports.default = new ApplicantsController();
