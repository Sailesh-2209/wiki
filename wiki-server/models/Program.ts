import { model, Model, Document, Schema } from "mongoose";
import { characterSchema } from "./Character";

interface IProgram extends Document {
  name: string;
  description: string;
  startedIn: string;
  endedIn: string;
  image: string;
  characters: typeof characterSchema[];
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
  character: [characterSchema],
});

export const Program: Model<IProgram> = model("Program", programSchema);
