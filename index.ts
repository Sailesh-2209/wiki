import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { User } from "./models/User";
import { register } from "./handlers/register";
import { login } from "./handlers/login";
import { auth } from "./utils/auth";
import {
  createProgram,
  getPrograms,
  updateProgram,
  deleteProgram,
} from "./handlers/program";
import {
  createCharacter,
  getCharacters,
  updateCharacter,
  deleteCharacter,
} from "./handlers/character";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL!;

const app = express();

mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.use(bodyParser.json());

    app.use(
      cors({
        origin: "https://wiki-omega.vercel.app",
        credentials: true,
      })
    );

    app.post("/register", async (req, res, next) => {
      const username = req.body.username;
      const password = req.body.password;
      const { user, error, token } = await register(username, password);
      res.send({
        user,
        error,
        token,
      });
      return next();
    });

    app.post("/login", async (req, res, next) => {
      const username = req.body.username;
      const password = req.body.password;
      const { user, error, token } = await login(username, password);
      res.send({
        user,
        error,
        token,
      });
      return next();
    });

    app.post("/checkauth", (req, res, next) => {
      const authorized = auth(req);
      res.send({
        authorized,
      });
      return next();
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
        return next();
      }

      const users = await User.find({});
      if (users) {
        res.send({
          users,
          error: null,
        });
      } else {
        res.statusCode = 404;
        return next();
      }
    });

    app.delete("/users/:uid", async (req, _, next) => {
      const uid = req.params.uid;
      User.findByIdAndDelete({ id: uid })
        .then((value) => {
          console.log(value);
        })
        .catch((error) => console.error(error));
      return next();
    });

    app.post("/programs", async (req, res, next) => {
      if (!auth(req)) {
        res.send({
          field: "authorization",
          message: "You are not authorized to perform this operation",
        });
        return next();
      }

      const { createdBy, name, description, startedIn, endedIn, image } =
        req.body;
      const { program, error } = await createProgram({
        createdBy,
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
      return next();
    });

    app.post("/programs/:pid", async (req, res, next) => {
      if (!auth(req)) {
        res.send({
          programs: null,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
        return next();
      }
      const pid = req.params.pid;
      const { character, error } = await createCharacter(pid, req);
      res.send({
        character,
        error,
      });
      return next();
    });

    app.post("/programs/:pid/edit", async (req, res, next) => {
      if (!auth(req)) {
        res.send({
          program: null,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
        return next();
      }
      const pid = req.params.pid;
      const { name, description, startedIn, endedIn, image, uid } = req.body;
      const { program, error } = await updateProgram({
        name,
        description,
        startedIn,
        endedIn,
        image,
        uid,
        pid,
      });
      res.send({
        program,
        error,
      });
      return next();
    });

    app.get("/programs", async (req, res, next) => {
      const { programs, error } = await getPrograms();
      res.send({
        programs,
        error,
      });
      return next();
    });

    app.get("/programs/:pid", async (req, res, next) => {
      const { characters, error } = await getCharacters(req.params.pid);
      res.send({
        characters,
        error,
      });
      return next();
    });

    app.delete("/programs/:pid", async (req, res, next) => {
      const pid = req.params.pid;
      const uid = req.body.uid;
      if (!auth(req)) {
        res.send({
          success: false,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
        return next();
      }
      const { success, error } = await deleteProgram(uid, pid);
      res.send({
        success,
        error,
      });
      return next();
    });

    app.post("/programs/:pid/:cid", async (req, res, next) => {
      const { pid, cid } = req.params;
      if (!auth(req)) {
        res.send({
          character: null,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
        return next();
      }
      const { name, actor, image, uid } = req.body;
      const { character, error } = await updateCharacter({
        name,
        actor,
        image,
        cid,
        pid,
        uid,
      });
      res.send({
        character,
        error,
      });
      return next();
    });

    app.delete("/programs/:pid/:cid", async (req, res, next) => {
      const { pid, cid } = req.params;
      const uid = req.body.uid;
      if (!auth(req)) {
        res.send({
          character: null,
          error: {
            field: "authorization",
            message: "You are not authorized to perform this operation",
          },
        });
        return next();
      }
      const { success, error } = await deleteCharacter(uid, cid);
      res.send({
        success,
        error,
      });
      return next();
    });

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
