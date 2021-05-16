import { model, Schema, Document, Model } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  createdAt: Date;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export const User: Model<IUser> = model("User", userSchema);
