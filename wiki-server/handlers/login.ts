import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface LoginReturn {
  user: object | null;
  error: { field: string; message: string } | null;
}

export const login: (
  username: string,
  password: string
) => Promise<LoginReturn> = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    return {
      user: null,
      error: {
        field: "username",
        message: "User not found",
      },
    };
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return {
      user: null,
      error: {
        field: "password",
        message: "Incorrect Password",
      },
    };
  }

  jwt.sign({ uid: user.id }, process.env.SECRET!, { expiresIn: "1h" });
  return {
    user,
    error: null,
  };
};
