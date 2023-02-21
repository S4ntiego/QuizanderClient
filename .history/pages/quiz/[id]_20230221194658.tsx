import React from "react";

const Siema = () => {
  return <div>Siema</div>;
};

export default Siema;

export const getServerSideProps = async (context) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: JSON.stringify(context.query) as string },
    include: {
      questions: {
        select: {
          question: true,
          answers: { select: { answer: true, isCorrect: true } },
        },
      },
    },
  });

  return { props: { quiz: quiz } };
};
