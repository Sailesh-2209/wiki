import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request } from "express";
dotenv.config();

export const auth: (req: Request) => boolean = (req) => {
  const bearerToken = req.headers.authorization;
  let error;
  if (bearerToken) {
    const token = bearerToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET!, (err) => {
      if (err) {
        console.error(err);
        error = err;
      } else {
        error = null;
      }
    });
  } else {
    error = "no bearer token";
  }
  if (error !== null) {
    return false;
  }
  return true;
};
