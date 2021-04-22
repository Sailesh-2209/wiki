import { model, Model, Document, Schema } from "mongoose";

export interface IProgram extends Document {
  name: string;
  description: string;
  startedIn: string;
  endedIn: string;
  image: string;
}

const programSchema = new Schema({
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

export const Program: Model<IProgram> = model("Program", programSchema);
