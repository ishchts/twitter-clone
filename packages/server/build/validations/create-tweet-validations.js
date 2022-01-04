"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTweetValidations = void 0;
var express_validator_1 = require("express-validator");
exports.createTweetValidations = [
    express_validator_1.body('text', 'Введите текст твита')
        .isString()
        .isLength({
        max: 280,
    })
        .withMessage('Неверная длинна 280'),
];
