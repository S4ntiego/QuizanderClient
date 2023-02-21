import { Quiz } from "@/components/Quiz";

export async function getQuiz(id: string) {
  return await fetch(`http://localhost:3000/api/quiz/${quizId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

interface QuizPageProps {
  params: { id: string };
}

export default async function QuizPage({ params }: QuizPageProps) {
  //   const quiz = await getQuiz(params?.id);
  console.log(params);
  return <div>siema</div>;
  //   return <Quiz quiz={quiz} />;
}
