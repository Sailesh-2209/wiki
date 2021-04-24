import { Program } from "../models/Program";
import { Character, IChar } from "../models/Character";
import { Request } from "express";

export const createCharacter: (
  pid: string,
  req: Request
) => Promise<{
  character: IChar | null;
  error: { field: string; message: string } | null;
}> = async (pid, req) => {
  const program = await Program.findById(pid);

  if (!program) {
    return {
      character: null,
      error: {
        field: "database",
        message: "There seems to be a problem. Try again later",
      },
    };
  }

  const { createdBy, name, image, actor } = req.body;
  const show = req.params.pid;

  if (!createdBy || !name || !image || !actor) {
    return {
      character: null,
      error: {
        field: "data",
        message: "Insufficient data",
      },
    };
  }

  const newCharacter = new Character({
    createdBy,
    show,
    name,
    image,
    actor,
  });
  const character = await newCharacter.save();

  if (character) {
    return {
      character,
      error: null,
    };
  } else {
    return {
      character: null,
      error: {
        field: "database",
        message:
          "There was an error in creating this character. Try again later",
      },
    };
  }
};

export const getCharacters: () => Promise<{
  characters: IChar[] | null;
  error: { field: string; message: string } | null;
}> = async () => {
  let document = await Character.find({});
  if (document) {
    return {
      characters: document,
      error: null,
    };
  } else {
    return {
      characters: null,
      error: {
        field: "database",
        message: "Counld not find program data. Try again later",
      },
    };
  }
};
