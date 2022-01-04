"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
var crypto_1 = __importDefault(require("crypto"));
var generateHash = function (value) { return crypto_1.default.createHash('md5').update(value).digest('hex'); };
exports.generateHash = generateHash;
