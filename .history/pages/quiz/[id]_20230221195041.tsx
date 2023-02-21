import React from "react";

const Siema = ({ quiz }) => {
  return <div>Siema{console.log(quiz)}</div>;
};

export default Siema;

export const getServerSideProps = async (context) => {
  const quiz = await prisma.quiz.findUnique({
    where: { id: JSON.stringify(context.query.id) as string },
    include: {
      questions: {
        select: {
          question: true,
          answers: { select: { answer: true, isCorrect: true } },
        },
      },
    },
  });

  console.log(JSON.stringify(context.query.id));
  console.log(quiz);

  return { props: { quiz: quiz } };
};
