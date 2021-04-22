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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProgram = void 0;
const Program_1 = require("../models/Program");
const createProgram = ({ name, description, startedIn, endedIn, image, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!name || !description || !startedIn || !endedIn || !image) {
        return {
            program: null,
            error: {
                field: "data",
                message: "Insufficient data",
            },
        };
    }
    const newProgram = new Program_1.Program({
        name,
        description,
        startedIn,
        endedIn,
        image,
    });
    const program = yield newProgram.save();
    if (!program) {
        return {
            program: null,
            error: {
                field: "database",
                message: "There was an error in creating this program. Try again later",
            },
        };
    }
    return {
        program,
        error: null,
    };
});
exports.createProgram = createProgram;
