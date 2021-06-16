"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    ClientController.prototype.applicantsList = function (req, res) {
        res.render('applicants/list');
    };
    ClientController.prototype.applicantsDetail = function (req, res) {
        res.render('applicants/detail');
    };
    ClientController.prototype.examList1 = function (req, res) {
        res.render('exam/list1');
    };
    ClientController.prototype.examList2 = function (req, res) {
        res.render('exam/list2');
    };
    ClientController.prototype.examList3 = function (req, res) {
        res.render('exam/list3');
    };
    ClientController.prototype.ratingList1 = function (req, res) {
        res.render('rating/list1');
    };
    ClientController.prototype.ratingList2 = function (req, res) {
        res.render('rating/list2');
    };
    return ClientController;
}());
exports.default = new ClientController();
