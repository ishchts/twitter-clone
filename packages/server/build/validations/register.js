"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidations = void 0;
var express_validator_1 = require("express-validator");
exports.registerValidations = [
    express_validator_1.body('email', 'Введите e-mail')
        .isEmail()
        .withMessage('Неверный E-Mail')
        .isLength({
        min: 10,
        max: 40,
    })
        .withMessage('Неверная длинна почты'),
    express_validator_1.body('fullName', 'Введите имя')
        .isString()
        .isLength({
        min: 10,
        max: 40,
    })
        .withMessage('Неверная длинна имени'),
    express_validator_1.body('username', 'Введите логин')
        .isString()
        .isLength({
        min: 10,
        max: 40,
    })
        .withMessage('Неверная длинна имени'),
    express_validator_1.body('password', 'Укажите пароль')
        .isString()
        .isLength({
        min: 6,
    })
        .withMessage('Неверная длинна пароля')
        .custom(function (value, _a) {
        var req = _a.req;
        if (value !== req.body.password2) {
            throw new Error('Пароли не совпадают');
        }
        return value;
    }),
];
