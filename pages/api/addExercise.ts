import { Exercise } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import getPrismaClient from "../../prisma/getPrismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Exercise>
) {
  const prisma = getPrismaClient();
  const exercise = req.body as Exercise;
  const newExercise = await prisma.exercise.create({ data: exercise });
  res.status(200).json(newExercise);
}
