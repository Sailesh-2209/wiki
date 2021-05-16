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
exports.getPrograms = exports.createProgram = void 0;
const Program_1 = require("../models/Program");
const createProgram = ({ createdBy, name, description, startedIn, endedIn, image, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!createdBy || !name || !description || !startedIn || !endedIn || !image) {
        return {
            program: null,
            error: {
                field: "data",
                message: "Insufficient data",
            },
        };
    }
    const searchProgram = yield Program_1.Program.findOne({ where: { name } }).catch((error) => console.log(error));
    if (searchProgram) {
        return {
            program: null,
            error: {
                field: "database",
                message: "Program already exists",
            },
        };
    }
    const newProgram = new Program_1.Program({
        createdBy,
        name,
        description,
        startedIn,
        endedIn,
        image,
    });
    const program = yield newProgram.save().catch((error) => console.log(error));
    if (!program) {
        return {
            program: null,
            error: {
                field: "database",
                message: "There was an error in creating this program. Try again later. Make sure that the program doesn't already exists and that the description and image are unique.",
            },
        };
    }
    return {
        program,
        error: null,
    };
});
exports.createProgram = createProgram;
const getPrograms = () => __awaiter(void 0, void 0, void 0, function* () {
    let document = yield Program_1.Program.find({}).catch((error) => console.log(error));
    if (document) {
        return {
            programs: document,
            error: null,
        };
    }
    else {
        return {
            programs: null,
            error: {
                field: "database",
                message: "Could not find program data. Try again later",
            },
        };
    }
});
exports.getPrograms = getPrograms;
