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

    console.log(quiz);
  }
};

export default handler;
