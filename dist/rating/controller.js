"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var service_1 = require("../service");
var RatingController = /** @class */ (function () {
    function RatingController() {
    }
    RatingController.prototype.getData = function (req, res) {
        var data = service_1.readFile(path_1.default.join(path_1.default.join(__dirname, '../', '../', 'static', 'rating.json')));
        res.json(data || []);
    };
    return RatingController;
}());
exports.default = new RatingController();
