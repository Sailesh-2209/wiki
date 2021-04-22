"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const mongoose_1 = require("mongoose");
const characterSchema = new mongoose_1.Schema({
    show: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        required: true,
    },
});
exports.Character = mongoose_1.model("Character", characterSchema);
