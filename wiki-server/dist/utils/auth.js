"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const auth = (token) => {
    jsonwebtoken_1.default.verify(token, process.env.SECRET, (err) => {
        if (err) {
            return false;
        }
        else {
            return true;
        }
    });
    return false;
};
exports.auth = auth;
