"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var express_validator_1 = require("express-validator");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var user_model_1 = require("../models/user-model");
var generage_hash_1 = require("../utils/generage-hash");
var send_email_1 = require("../utils/send-email");
var is_valid_object_id_1 = require("../utils/is-valid-object-id");
var _UserController = /** @class */ (function () {
    function _UserController() {
        var _this = this;
        this.index = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var users, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, user_model_1.UserModel.find({}).populate('user').exec()];
                    case 1:
                        users = _a.sent();
                        res.json({
                            status: 'success',
                            data: users,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_1),
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var errors, data, user, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        errors = express_validator_1.validationResult(req);
                        if (!errors.isEmpty()) {
                            res.status(400).json({ status: 'error11', message: errors.array() });
                            return [2 /*return*/];
                        }
                        data = {
                            email: req.body.email,
                            username: req.body.username,
                            fullName: req.body.fullName,
                            password: generage_hash_1.generateHash(req.body.password + ":" + process.env.SECRET_HASH_KEY),
                            confirmHash: generage_hash_1.generateHash(String(process.env.SECRET_HASH_KEY)),
                        };
                        return [4 /*yield*/, user_model_1.UserModel.create(data)];
                    case 1:
                        user = _a.sent();
                        send_email_1.sendEmail({
                            from: 'admin@twitter-clone.com',
                            to: data.email,
                            subject: 'Подтверждение почты Twitter Clone Tutorial',
                            html: "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043F\u043E\u0447\u0442\u0443, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435\n          <a href=\"http://localhost:" + process.env.PORT + "/auth/verify?hash=" + data.confirmHash + "\">\u043F\u043E \u044D\u0442\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0435</a>\n        ",
                        });
                        res.json({
                            status: 'success',
                            data: user,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_2),
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.verify = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var hash, user, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        hash = req.query.hash;
                        if (!hash) {
                            res.status(400).send();
                        }
                        return [4 /*yield*/, user_model_1.UserModel.findOne({ confirmHash: hash }).exec()];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            // eslint-disable-next-line no-console
                            console.log('пользователь не найден');
                            return [2 /*return*/];
                        }
                        user.confirmed = true;
                        return [4 /*yield*/, user.save()];
                    case 2:
                        _a.sent();
                        res.json({
                            status: 'success',
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_3),
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.show = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, user, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.id;
                        if (!is_valid_object_id_1.isValidObjectId(userId)) {
                            res.status(400).send();
                        }
                        return [4 /*yield*/, user_model_1.UserModel.findById(userId).exec()];
                    case 1:
                        user = _a.sent();
                        res.json({
                            status: 'success',
                            data: user,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_4),
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.afterLogin = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (req.user) {
                        res.json({
                            status: 'success',
                            data: __assign(__assign({}, req.user.toJSON()), { token: jsonwebtoken_1.default.sign({ data: req.user }, String(process.env.SECRET_HASH_KEY), {
                                    expiresIn: '30d',
                                }) }),
                        });
                    }
                }
                catch (e) {
                    res.json({
                        status: 'error',
                        message: JSON.stringify(e),
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getUserInfo = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                try {
                    user = req.user.toJSON();
                    res.json({
                        status: 'success',
                        data: user,
                    });
                }
                catch (e) {
                    res.json({
                        status: 'error',
                        message: JSON.stringify(e),
                    });
                }
                return [2 /*return*/];
            });
        }); };
    }
    return _UserController;
}());
exports.UserController = new _UserController();
