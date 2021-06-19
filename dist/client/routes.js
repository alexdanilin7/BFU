"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = __importDefault(require("./controller"));
var router = express_1.Router();
router.get('/', controller_1.default.applicantsList1);
router.get('/:id', controller_1.default.applicantsList2);
router.get('/applicants/:id', controller_1.default.applicantsDetail);
router.get('/:id1/:id2', controller_1.default.applicantsList3);
router.get('/exam/', controller_1.default.examList1);
router.get('/exam/:id', controller_1.default.examList2);
router.get('/exam/:id/:idx', controller_1.default.examList3);
router.get('/rating/', controller_1.default.ratingList1);
router.get('/rating/:id', controller_1.default.ratingList2);
exports.default = router;
