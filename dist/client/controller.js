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
    ClientController.prototype.applicantsAnalitics = function (req, res) {
        res.render('statistic/applicants_analitisc');
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
    ClientController.prototype.ratingSpoList1 = function (req, res) {
        res.render('rating/spo9/list1');
    };
    ClientController.prototype.ratingSpoList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/spo9/list2', { id: id });
    };
    ClientController.prototype.ratingSpo11List1 = function (req, res) {
        res.render('rating/spo11/list1');
    };
    ClientController.prototype.ratingSpo11List2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/spo11/list2', { id: id });
    };
    ClientController.prototype.ratingBakList1 = function (req, res) {
        res.render('rating/bak/list1');
    };
    ClientController.prototype.ratingBakList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/bak/list2', { id: id });
    };
    ClientController.prototype.ratingMagList1 = function (req, res) {
        res.render('rating/mag/list1');
    };
    ClientController.prototype.ratingMagList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/mag/list2', { id: id });
    };
    ClientController.prototype.ratingSpecList1 = function (req, res) {
        res.render('rating/spec/list1');
    };
    ClientController.prototype.ratingSpecList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/spec/list2', { id: id });
    };
    ClientController.prototype.ratingOrdList1 = function (req, res) {
        res.render('rating/ord/list1');
    };
    ClientController.prototype.ratingOrdList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/ord/list2', { id: id });
    };
    ClientController.prototype.ratingApsList1 = function (req, res) {
        res.render('rating/asp/list1');
    };
    ClientController.prototype.ratingApsList2 = function (req, res) {
        var id = req.params.id;
        res.render('rating/asp/list2', { id: id });
    };
    return ClientController;
}());
exports.default = new ClientController();
