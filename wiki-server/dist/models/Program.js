"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const mongoose_1 = require("mongoose");
const Character_1 = require("./Character");
const programSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    startedIn: {
        type: String,
        required: true,
        unique: true,
    },
    endedIn: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
    character: [Character_1.characterSchema],
});
exports.Program = mongoose_1.model("Program", programSchema);