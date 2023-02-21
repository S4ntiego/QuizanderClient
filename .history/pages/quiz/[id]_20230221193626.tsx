import React from "react";
import { useRouter } from "next/router";
import { Quiz } from "@/components/Quiz";
import { cache } from "react";

const getQuiz = async (id) => {
  const res = await prisma.quiz.findMany({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });
  return res;
};

export async function quizPage() {
  const router = useRouter();
  const { id } = router.query;
  const quiz = await getQuiz(id as string);
  return <div>siema</div>;
}

export default quizPage;
