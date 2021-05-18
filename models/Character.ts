import { Document, Model, model, Schema } from "mongoose";

export interface IChar extends Document {
  createdBy: string;
  show: string;
  name: string;
  image: string;
  actor: string;
}

const characterSchema = new Schema({
  createdBy: {
    type: String,
    required: true,
  },
  show: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
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
