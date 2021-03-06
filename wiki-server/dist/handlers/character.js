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
exports.deleteCharacter = exports.updateCharacter = exports.getCharacters = exports.createCharacter = void 0;
const Program_1 = require("../models/Program");
const Character_1 = require("../models/Character");
const createCharacter = (pid, req) => __awaiter(void 0, void 0, void 0, function* () {
    const program = yield Program_1.Program.findById(pid).catch((error) => console.log(error));
    if (!program) {
        return {
            character: null,
            error: {
                field: "database",
                message: "There seems to be a problem. Try again later",
            },
        };
    }
    const { createdBy, name, image, actor } = req.body;
    const show = req.params.pid;
    if (!createdBy || !name || !image || !actor) {
        return {
            character: null,
            error: {
                field: "data",
                message: "Insufficient data",
            },
        };
    }
    const newCharacter = new Character_1.Character({
        createdBy,
        show,
        name,
        image,
        actor,
    });
    const character = yield newCharacter
        .save()
        .catch((error) => console.log(error));
    if (character) {
        return {
            character,
            error: null,
        };
    }
    else {
        return {
            character: null,
            error: {
                field: "database",
                message: "There was an error in creating this character. Try again later",
            },
        };
    }
});
exports.createCharacter = createCharacter;
const getCharacters = (pid) => __awaiter(void 0, void 0, void 0, function* () {
    let document = yield Character_1.Character.find({ show: pid }).catch((error) => console.log(error));
    if (document) {
        return {
            characters: document,
            error: null,
        };
    }
    else {
        return {
            characters: null,
            error: {
                field: "database",
                message: "Counld not find program data. Try again later",
            },
        };
    }
});
exports.getCharacters = getCharacters;
const updateCharacter = ({ name, actor, image, cid, pid, uid }) => __awaiter(void 0, void 0, void 0, function* () {
    let document = yield Character_1.Character.findById(cid).catch((error) => console.log(error));
    if (!document) {
        return {
            character: null,
            error: {
                field: "database",
                message: "Could not find program data. Try again later",
            },
        };
    }
    if (document.createdBy !== uid) {
        return {
            character: null,
            error: {
                field: "authorization",
                message: "You are not authorized to perform this operation",
            },
        };
    }
    let character = yield Character_1.Character.findByIdAndUpdate(cid, {
        name,
        actor,
        image,
    }).catch((error) => console.log(error));
    if (character) {
        return {
            character,
            error: null,
        };
    }
    else {
        return {
            character: null,
            error: {
                field: "database",
                message: "Could not find program data. Try again later",
            },
        };
    }
});
exports.updateCharacter = updateCharacter;
const deleteCharacter = (uid, cid) => __awaiter(void 0, void 0, void 0, function* () {
    let document = yield Character_1.Character.findOne({ _id: cid }).catch((error) => console.log(error));
    let error = null;
    if (!document) {
        return {
            success: false,
            error: {
                field: "database",
                message: "Could not find program data. Try again later",
            },
        };
    }
    if (document.createdBy !== uid) {
        return {
            success: false,
            error: {
                field: "authorization",
                message: "You are not authorized to perform this operation",
            },
        };
    }
    yield Character_1.Character.findByIdAndDelete(cid).catch((err) => {
        error = err;
        console.log(error);
    });
    if (error) {
        return {
            success: false,
            error: {
                field: "",
                message: "",
            },
        };
    }
    else {
        return {
            success: true,
            error: null,
        };
    }
});
exports.deleteCharacter = deleteCharacter;
