import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request } from "express";
dotenv.config();

export const auth: (req: Request) => boolean = (req) => {
  const bearerToken = req.headers.authorization;

  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET!, (err) => {
      if (err) {
        return false;
      } else {
        return true;
      }
    });
  }
  return false;
};
