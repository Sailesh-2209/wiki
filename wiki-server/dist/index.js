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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const User_1 = require("./models/User");
const register_1 = require("./handlers/register");
const login_1 = require("./handlers/login");
const auth_1 = require("./utils/auth");
const program_1 = require("./handlers/program");
const character_1 = require("./handlers/character");
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL;
const app = express_1.default();
mongoose_1.default
    .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    app.use(body_parser_1.default.json());
    app.use(cors_1.default({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    app.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const { user, error, token } = yield register_1.register(username, password);
        res.send({
            user,
            error,
            token,
        });
    }));
    app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const username = req.body.username;
        const password = req.body.password;
        const { user, error, token } = yield login_1.login(username, password);
        res.send({
            user,
            error,
            token,
        });
    }));
    app.get("/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!auth_1.auth(req)) {
            res.send({
                users: null,
                error: {
                    field: "authorization",
                    message: "You are not authorized to perform this operation",
                },
            });
            next();
        }
        const users = yield User_1.User.find({});
        if (users) {
            res.send({
                users,
                error: null,
            });
        }
        else {
            res.statusCode = 404;
            next();
        }
    }));
    app.post("/programs", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!auth_1.auth(req)) {
            res.send({
                field: "authorization",
                message: "You are not authorized to perform this operation",
            });
            next();
        }
        const { name, description, startedIn, endedIn, image } = req.body;
        const { program, error } = yield program_1.createProgram({
            name,
            description,
            startedIn,
            endedIn,
            image,
        });
        res.send({
            program,
            error,
        });
        next();
    }));
    app.post("/programs/:pid", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!auth_1.auth(req)) {
            res.send({
                programs: null,
                error: {
                    field: "authorization",
                    message: "You are not authorized to perform this operation",
                },
            });
            next();
        }
        const pid = req.params.pid;
        const { character, error } = yield character_1.createCharacter(pid, req);
        res.send({
            character,
            error,
        });
        next();
    }));
    app.get("/programs", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!auth_1.auth(req)) {
            res.send({
                programs: null,
                error: {
                    field: "authorization",
                    message: "You are not authorized to perform this operation",
                },
            });
            next();
        }
        const { programs, error } = yield program_1.getPrograms();
        res.send({
            programs,
            error,
        });
        next();
    }));
    app.get("/programs/:pid", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (!auth_1.auth(req)) {
            res.send({
                programs: null,
                error: {
                    field: "authorization",
                    message: "You are not authorized to perform this operation",
                },
            });
            next();
        }
        const { characters, error } = yield character_1.getCharacters();
        res.send({
            characters,
            error,
        });
        next();
    }));
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error(err);
});
