"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        unique: true,
        required: true,
        type: String,
    },
    fullName: {
        required: true,
        type: String,
    },
    username: {
        unique: true,
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
        select: false,
    },
    confirmHash: {
        required: true,
        type: String,
        select: false,
    },
    location: String,
    confirmed: {
        type: Boolean,
        default: false,
        select: false,
    },
    about: String,
    website: String,
    timestamps: Boolean,
});
exports.UserModel = mongoose_1.model('User', UserSchema);
