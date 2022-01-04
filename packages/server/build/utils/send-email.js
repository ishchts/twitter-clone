"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
var mailer_1 = __importDefault(require("../core/mailer"));
var sendEmail = function (_a) {
    var from = _a.from, to = _a.to, subject = _a.subject, html = _a.html;
    mailer_1.default.sendMail({
        from: from,
        to: to,
        subject: subject,
        html: html,
    }, function (err, info) {
        if (err) {
            // eslint-disable-next-line no-console
            console.log(err);
        }
        else {
            // eslint-disable-next-line no-console
            console.log(info);
        }
    });
};
exports.sendEmail = sendEmail;
