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
  const program = await Program.findById(pid).catch((error) =>
    console.log(error)
  );

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
  const character = await newCharacter
    .save()
    .catch((error) => console.log(error));

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

export const getCharacters: (pid: string) => Promise<{
  characters: IChar[] | null;
  error: { field: string; message: string } | null;
}> = async (pid) => {
  let document = await Character.find({ show: pid }).catch((error) =>
    console.log(error)
  );
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

export const updateCharacter: (arg0: {
  name: string;
  actor: string;
  image: string;
  cid: string;
  pid: string;
  uid: string;
}) => Promise<{
  character: null | IChar;
  error: null | {
    field: string;
    message: string;
  };
}> = async ({ name, actor, image, cid, pid, uid }) => {
  let document = await Character.findById(cid).catch((error) =>
    console.log(error)
  );
  if (!document) {
    return {
      character: null,
      error: {
        field: "database",
        message: "Could not find program data. Try again later",
      },
    };
  }
  if (document.createdBy !== uid) {
    return {
      character: null,
      error: {
        field: "authorization",
        message: "You are not authorized to perform this operation",
      },
    };
  }

  let character = await Character.findByIdAndUpdate(cid, {
    name,
    actor,
    image,
  }).catch((error) => console.log(error));
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
        message: "Could not find program data. Try again later",
      },
    };
  }
};

export const deleteCharacter: (
  uid: string,
  cid: string
) => Promise<{
  success: boolean;
  error: { field: string; message: string } | null;
}> = async (uid, cid) => {
  let document = await Character.findOne({ _id: cid }).catch((error) =>
    console.log(error)
  );
  let error = null;
  if (!document) {
    return {
      success: false,
      error: {
        field: "database",
        message: "Could not find program data. Try again later",
      },
    };
  }
  if (document!.createdBy !== uid) {
    return {
      success: false,
      error: {
        field: "authorization",
        message: "You are not authorized to perform this operation",
      },
    };
  }
  await Character.findByIdAndDelete(cid).catch((err) => {
    error = err;
    console.log(error);
  });
  if (error) {
    return {
      success: false,
      error: {
        field: "",
        message: "",
      },
    };
  } else {
    return {
      success: true,
      error: null,
    };
  }
};
