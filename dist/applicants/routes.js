"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./controller"));
var router = express_1.Router();
router.get('/get/', controller_1.default.getData);
router.get('/get/:id', controller_1.default.getDetail);
// router.post('/set/', ApplicantsController.setData)
exports.default = router;
