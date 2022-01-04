"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./utils/dotenv");
var user_controller_1 = require("./controllers/user-controller");
var tweets_controller_1 = require("./controllers/tweets-controller");
var register_1 = require("./validations/register");
var create_tweet_validations_1 = require("./validations/create-tweet-validations");
require("./core/db");
var passport_1 = require("./core/passport");
var app = express_1.default();
app.use(express_1.default.json());
app.use(passport_1.passport.initialize());
// app.patch('/users', UserController.update);
// app.delete('/users', UserController.delete);
app.get('/users', user_controller_1.UserController.index);
app.get('/users/me', passport_1.passport.authenticate('jwt', { session: false }), user_controller_1.UserController.getUserInfo);
app.get('/users/:id', register_1.registerValidations, user_controller_1.UserController.show);
app.get('/tweets', tweets_controller_1.TweetsController.index);
app.get('/tweets/:id', tweets_controller_1.TweetsController.show);
app.delete('/tweets/:id', passport_1.passport.authenticate('jwt'), tweets_controller_1.TweetsController.delete);
app.post('/tweets', passport_1.passport.authenticate('jwt'), create_tweet_validations_1.createTweetValidations, tweets_controller_1.TweetsController.create);
app.patch('/tweets/:id', passport_1.passport.authenticate('jwt'), create_tweet_validations_1.createTweetValidations, tweets_controller_1.TweetsController.update);
app.get('/auth/verify', register_1.registerValidations, user_controller_1.UserController.verify);
app.post('/auth/register', register_1.registerValidations, user_controller_1.UserController.create);
app.post('/auth/login', passport_1.passport.authenticate('local'), user_controller_1.UserController.afterLogin);
app.listen(Number(process.env.PORT), function () {
    // eslint-disable-next-line no-console
    console.log('server started');
});
