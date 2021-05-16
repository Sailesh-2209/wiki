import { Program } from "../models/Program";
import { IProgram } from "../models/Program";

interface createProgramInputInterface {
  createdBy: string;
  name: string;
  description: string;
  startedIn: string;
  endedIn: string;
  image: string;
}
interface createProgramReturnInterface {
  program: object | null;
  error: { field: string; message: string } | null;
}
interface getProgramsReturnInterface {
  programs: IProgram[] | null;
  error: { field: string; message: string } | null;
}

export const createProgram: (
  arg0: createProgramInputInterface
) => Promise<createProgramReturnInterface> = async ({
  createdBy,
  name,
  description,
  startedIn,
  endedIn,
  image,
}) => {
  if (!createdBy || !name || !description || !startedIn || !endedIn || !image) {
    return {
      program: null,
      error: {
        field: "data",
        message: "Insufficient data",
      },
    };
  }

  const searchProgram = await Program.findOne({ where: { name } }).catch(
    (error) => console.log(error)
  );
  if (searchProgram) {
    return {
      program: null,
      error: {
        field: "database",
        message: "Program already exists",
      },
    };
  }

  const newProgram = new Program({
    createdBy,
    name,
    description,
    startedIn,
    endedIn,
    image,
  });
  const program = await newProgram.save().catch((error) => console.log(error));

  if (!program) {
    return {
      program: null,
      error: {
        field: "database",
        message:
          "There was an error in creating this program. Try again later. Make sure that the program doesn't already exists and that the description and image are unique.",
      },
    };
  }

  return {
    program,
    error: null,
  };
};

export const getPrograms: () => Promise<getProgramsReturnInterface> =
  async () => {
    let document = await Program.find({}).catch((error) => console.log(error));
    if (document) {
      return {
        programs: document,
        error: null,
      };
    } else {
      return {
        programs: null,
        error: {
          field: "database",
          message: "Could not find program data. Try again later",
        },
      };
    }
  };
