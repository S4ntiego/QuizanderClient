import React from "react";
import { useRouter } from "next/router";
import { Quiz } from "@/components/Quiz";
import { cache } from "react";

const getQuiz = async (id) => {
  const pepega = await prisma.quiz.findMany({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  return JSON.stringify(pepega);
};

export async function quizPage() {
  const router = useRouter();
  const { id } = router.query;
  const quiz = await getQuiz(id as string);
  return <div>{quiz.title}</div>;
}

export default quizPage;
