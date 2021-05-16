import { User } from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface LoginReturn {
  user: object | null;
  error: { field: string; message: string } | null;
  token: string | null;
}

export const login: (
  username: string,
  password: string
) => Promise<LoginReturn> = async (username, password) => {
  const user = await User.findOne({ username }).catch((error) =>
    console.log(error)
  );
  if (!user) {
    return {
      user: null,
      error: {
        field: "username",
        message: "User not found",
      },
      token: null,
    };
  }
  const match = await bcrypt
    .compare(password, user.password)
    .catch((error) => console.log(error));
  if (!match) {
    return {
      user: null,
      error: {
        field: "password",
        message: "Incorrect Password",
      },
      token: null,
    };
  }

  const token = jwt.sign({ uid: user.id }, process.env.SECRET!, {
    expiresIn: "1h",
  });
  return {
    user,
    error: null,
    token,
  };
};
