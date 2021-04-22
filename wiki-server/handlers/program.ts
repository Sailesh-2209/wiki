import { Program } from "../models/Program";

interface createProgramInputInterface {
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

export const createProgram: (
  arg0: createProgramInputInterface
) => Promise<createProgramReturnInterface> = async ({
  name,
  description,
  startedIn,
  endedIn,
  image,
}) => {
  if (!name || !description || !startedIn || !endedIn || !image) {
    return {
      program: null,
      error: {
        field: "data",
        message: "Insufficient data",
      },
    };
  }

  const searchProgram = Program.findOne({ name });
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
    name,
    description,
    startedIn,
    endedIn,
    image,
  });
  const program = await newProgram.save();

  if (!program) {
    return {
      program: null,
      error: {
        field: "database",
        message: "There was an error in creating this program. Try again later",
      },
    };
  }

  return {
    program,
    error: null,
  };
};
