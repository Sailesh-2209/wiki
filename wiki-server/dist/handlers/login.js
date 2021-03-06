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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOne({ username }).catch((error) => console.log(error));
    if (!user) {
        return {
            user: null,
            error: {
                field: "username",
                message: "User not found",
            },
            token: null,
        };
    }
    const match = yield bcrypt_1.default
        .compare(password, user.password)
        .catch((error) => console.log(error));
    if (!match) {
        return {
            user: null,
            error: {
                field: "password",
                message: "Incorrect Password",
            },
            token: null,
        };
    }
    const token = jsonwebtoken_1.default.sign({ uid: user.id }, process.env.SECRET, {
        expiresIn: "1h",
    });
    return {
        user,
        error: null,
        token,
    };
});
exports.login = login;
