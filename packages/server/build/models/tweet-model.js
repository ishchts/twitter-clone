"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetModel = void 0;
var mongoose_1 = require("mongoose");
var TweetSchema = new mongoose_1.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    timestamps: Boolean,
});
exports.TweetModel = mongoose_1.model('Tweet', TweetSchema);
