"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    .then(function () {
    // eslint-disable-next-line no-console
    console.log('Установлено соединение с MongoDB');
})
    .catch(function (err) {
    // eslint-disable-next-line no-console
    console.log('Ошибка MongoDB:', err.text);
});
