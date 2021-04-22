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
exports.register = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (username.trim() === "") {
        let newError = {
            field: "username",
            message: "Username cannot be null",
        };
        return {
            user: null,
            error: newError,
            token: null,
        };
    }
    if (password.trim() === "") {
        let newError = {
            field: "password",
            message: "Password cannot be empty",
        };
        return {
            user: null,
            error: newError,
            token: null,
        };
    }
    if (username.length < 3) {
        let newError = {
            field: "username",
            message: "Username must be longer",
        };
        return {
            user: null,
            error: newError,
            token: null,
        };
    }
    if (password.length < 6) {
        let newError = {
            field: "password",
            message: "Password must be longer",
        };
        return {
            user: null,
            error: newError,
            token: null,
        };
    }
    if (!/[a-zA-Z0-9]/.test(password)) {
        let newError = {
            field: "password",
            message: "Password must have atleast one uppercase letter, one lowercase letter and one number",
        };
        return {
            user: null,
            error: newError,
            token: null,
        };
    }
    const user = yield User_1.User.findOne({ username });
    if (user) {
        return {
            user: null,
            error: {
                field: "username",
                message: "User already exists",
            },
            token: null,
        };
    }
    const hash = yield bcrypt_1.default.hash(password, 12);
    const newUser = yield User_1.User.create({
        username,
        password: hash,
        createdAt: new Date(),
    });
    const token = jsonwebtoken_1.default.sign({
        uid: newUser._id,
    }, process.env.SECRET, { expiresIn: "2h" });
    return {
        user: newUser,
        error: null,
        token,
    };
});
exports.register = register;
