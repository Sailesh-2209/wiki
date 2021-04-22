import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "./models/User";
import { register } from "./handlers/register";
import { login } from "./handlers/login";
import { auth } from "./utils/auth";
import { createProgram } from "./handlers/program";

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
      const { user, error, token } = await register(username, password);
      res.send({
        user,
        error,
        token,
      });
    });

    app.post("/login", async (req, res) => {
      const username = req.body.username;
      const password = req.body.password;
      const { user, error, token } = await login(username, password);
      res.send({
        user,
        error,
        token,
      });
    });

    app.get("/users", async (req, res, next) => {
      if (!auth(req)) {
        res.send({
          users: null,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
      }

      const users = await User.find({});
      if (users) {
        res.send({
          users,
          error: null,
        });
      } else {
        res.statusCode = 404;
        next();
      }
    });

    app.post("/programs", async (req, res) => {
      if (!auth(req)) {
        res.send({
          field: "authorization",
          message: "You are not authorized to perform this operation",
        });
      }

      const { name, description, startedIn, endedIn, image } = req.body;
      const { program, error } = await createProgram({
        name,
        description,
        startedIn,
        endedIn,
        image,
      });
      res.send({
        program,
        error,
      });
    });

    app.get("/programs", (req, res, next) => {
      if (!auth(req)) {
        res.send({
          field: "authorization",
          message: "You are not authorized to perform this operation",
        });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
