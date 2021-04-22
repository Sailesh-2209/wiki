import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

interface RegisterReturn {
  user: object | null;
  error: object | null;
}

export const register: (
  username: string,
  password: string
) => Promise<RegisterReturn> = async (username, password) => {
  if (username.trim() === "") {
    let newError = {
      field: "username",
      message: "Username cannot be null",
    };
    return {
      user: null,
      error: newError,
    };
  }

  if (password.trim() === "") {
    let newError = {
      field: "password",
      message: "Password cannot be empty",
    };
    return {
      user: null,
      error: newError,
    };
  }

  if (username.length < 3) {
    let newError = {
      field: "username",
      message: "Username must be longer",
    };
    return {
      user: null,
      error: newError,
    };
  }

  if (password.length < 6) {
    let newError = {
      field: "password",
      message: "Password must be longer",
    };
    return {
      user: null,
      error: newError,
    };
  }

  if (!/[a-zA-Z0-9]/.test(password)) {
    let newError = {
      field: "password",
      message:
        "Password must have atleast one uppercase letter, one lowercase letter and one number",
    };
    return {
      user: null,
      error: newError,
    };
  }

  const user = await User.findOne({ username });
  if (user) {
    return {
      user: null,
      error: {
        field: "username",
        error: "User already exists",
      },
    };
  }

  const hash = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    username,
    password: hash,
    createdAt: new Date(),
  });
  jwt.sign(
    {
      uid: newUser._id,
    },
    process.env.SECRET!,
    { expiresIn: "2h" }
  );

  return {
    user: newUser,
    error: null,
  };
};