import { Schema } from "mongoose";

export const characterSchema = new Schema({
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
