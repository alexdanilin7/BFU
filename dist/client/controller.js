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
    return ClientController;
}());
exports.default = new ClientController();
