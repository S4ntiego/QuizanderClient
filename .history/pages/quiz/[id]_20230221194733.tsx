import React from "react";

const Siema = ({ quiz }) => {
  return <div>Siema{console.log(quiz)}</div>;
};

export default Siema;

export const getServerSideProps = async (context) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: JSON.stringify(context.query) },
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
