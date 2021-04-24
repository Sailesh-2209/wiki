"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Program = void 0;
const mongoose_1 = require("mongoose");
const programSchema = new mongoose_1.Schema({
    createdBy: {
        type: String,
        required: true,
    },
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
});
exports.Program = mongoose_1.model("Program", programSchema);
