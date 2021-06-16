"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./controller"));
var router = express_1.Router();
router.get('/', controller_1.default.applicantsList);
router.get('/exam/', controller_1.default.examList1);
router.get('/exam/:id', controller_1.default.examList2);
router.get('/exam/:id/:idx', controller_1.default.examList3);
router.get('/rating/', controller_1.default.ratingList1);
router.get('/rating/:id', controller_1.default.ratingList2);
router.get('/:id', controller_1.default.applicantsDetail);
exports.default = router;
