"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetsController = void 0;
var express_validator_1 = require("express-validator");
var tweet_model_1 = require("../models/tweet-model");
var is_valid_object_id_1 = require("../utils/is-valid-object-id");
var _TweetsController = /** @class */ (function () {
    function _TweetsController() {
        var _this = this;
        this.index = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var users, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, tweet_model_1.TweetModel
                                .find({})
                                .populate('user')
                                .sort({ createdAt: '-1' })
                                .exec()];
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
        this.show = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tweetId, tweet, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        tweetId = req.params.id;
                        if (!is_valid_object_id_1.isValidObjectId(tweetId)) {
                            res.status(400).send();
                        }
                        return [4 /*yield*/, tweet_model_1.TweetModel.findById(tweetId).exec()];
                    case 1:
                        tweet = _a.sent();
                        res.json({
                            status: 'success',
                            data: tweet,
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
        this.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, errors, data, tweet, _a, _b, e_3;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        user = req.user;
                        if (!user) {
                            // eslint-disable-next-line no-console
                            console.log('Пользователь не найден');
                            return [2 /*return*/];
                        }
                        errors = express_validator_1.validationResult(req);
                        if (!errors.isEmpty()) {
                            res.status(400).json({ status: 'error11', message: errors.array() });
                            return [2 /*return*/];
                        }
                        data = {
                            text: req.body.text,
                            // @ts-ignore
                            // eslint-disable-next-line no-underscore-dangle
                            user: user._id,
                        };
                        return [4 /*yield*/, tweet_model_1.TweetModel.create(data)];
                    case 1:
                        tweet = _d.sent();
                        _b = (_a = res).json;
                        _c = {
                            status: 'success'
                        };
                        return [4 /*yield*/, tweet.populate('user').execPopulate()];
                    case 2:
                        _b.apply(_a, [(_c.data = _d.sent(),
                                _c)]);
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _d.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_3),
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tweetId, tweet, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        tweetId = req.params.id;
                        if (!is_valid_object_id_1.isValidObjectId(tweetId)) {
                            res.status(400).send();
                        }
                        return [4 /*yield*/, tweet_model_1.TweetModel.findById(tweetId)];
                    case 1:
                        tweet = _a.sent();
                        if (tweet) {
                            tweet.remove();
                            res.send();
                        }
                        res.status(400).send();
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
        this.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var tweetId, tweet, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        tweetId = req.params.id;
                        if (!is_valid_object_id_1.isValidObjectId(tweetId)) {
                            res.status(400).send();
                        }
                        return [4 /*yield*/, tweet_model_1.TweetModel.findById(tweetId)];
                    case 1:
                        tweet = _a.sent();
                        if (tweet) {
                            tweet.text = req.body.text;
                            tweet.save();
                            res.send();
                        }
                        res.status(400).send();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        res.json({
                            status: 'error',
                            message: JSON.stringify(e_5),
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return _TweetsController;
}());
exports.TweetsController = new _TweetsController();
