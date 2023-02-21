import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const quiz = await prisma.quiz.findMany({
      where: { id: req.query.id as string },
      include: {
        questions: {
          select: {
            question: true,
            answers: { select: { answer: true, isCorrect: true } },
          },
        },
      },
    });

    quiz.coverImage =
      "https://d16toh0t29dtt4.cloudfront.net/" + quiz.coverImage;

    console.log(quiz);
  }
};

export default handler;
