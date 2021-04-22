import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { register } from "./handlers/register";
import { login } from "./handlers/login";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL!;

const app = express();

mongoose
  .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.use(bodyParser.json());

    app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );

    app.post("/register", async (req, res) => {
      const username = req.body.username;
      const password = req.body.password;
      const { user, error } = await register(username, password);
      res.send({
        user,
        error,
      });
    });

    app.post("/login", async (req, res, next) => {
      const username = req.body.username;
      const password = req.body.password;
      const { user, error } = await login(username, password);
      res.send({
        user,
        error,
      });
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
