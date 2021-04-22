import { Document, Model, model, Schema } from "mongoose";

interface IChar extends Document {
  show: string;
  name: string;
  image: string;
  actor: string;
}

const characterSchema = new Schema({
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

export const Character: Model<IChar> = model("Character", characterSchema);
