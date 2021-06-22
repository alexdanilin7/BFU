"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientController = /** @class */ (function () {
    function ClientController() {
    }
    ClientController.prototype.applicantsList1 = function (req, res) {
        res.render('applicants/list1');
    };
    ClientController.prototype.applicantsList2 = function (req, res) {
        var id = req.params.id;
        res.render('applicants/list2', { id: id });
    };
    ClientController.prototype.applicantsList3 = function (req, res) {
        var _a = req.params, id1 = _a.id1, id2 = _a.id2;
        res.render('applicants/list3', { id1: id1, id2: id2 });
    };
    ClientController.prototype.applicantsDetail = function (req, res) {
        res.render('applicants/detail');
    };
    ClientController.prototype.applicantsStatistic = function (req, res) {
        res.render('statistic/applicants');
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
