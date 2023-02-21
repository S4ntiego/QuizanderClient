import { Quiz } from "@/components/Quiz";

export async function getQuiz(id: string) {
  return await fetch(`http://localhost:3000/api/quiz/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data.data.quiz;
    });
}

interface QuizPageProps {
  params: { id: string };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const quiz = await getQuiz(params?.id);

  return <Quiz quiz={quiz} />;
}
