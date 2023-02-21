import React from "react";
import { useRouter } from "next/router";
import { Quiz } from "@/components/Quiz";
import { cache } from "react";

export async function quizPage({ quiz }) {
  return <div>siema</div>;
}

export default quizPage;

export const getServerSideProps = async ({ context, req }) => {
  const id = context.params;

  const quiz = await prisma.quiz.findMany({
    where: {
      id: id as string,
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
    },
  });

  return { props: { quiz } };
};
