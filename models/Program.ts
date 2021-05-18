import mongoose, { model, Model, Document, Schema } from "mongoose";

export interface IProgram extends Document {
  createdBy: string;
  name: string;
  description: string;
  startedIn: string;
  endedIn: string;
  image: string;
}

const programSchema = new Schema({
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
  },
  endedIn: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Program: Model<IProgram> = model("Program", programSchema);
