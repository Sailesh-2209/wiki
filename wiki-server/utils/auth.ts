import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth: (token: string) => boolean = (token) => {
  jwt.verify(token, process.env.SECRET!, (err) => {
    if (err) {
      return false;
    } else {
      return true;
    }
  });
  return false;
};
