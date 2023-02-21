import { useRouter } from "next/router";

export default async function QuizPage() {
  const router = useRouter();
  const { id } = router.query;
  return <div>siema</div>;
  //   return <Quiz quiz={quiz} />;
}

export async function getQuiz(id: string) {
  return await fetch(`http://localhost:3000/api/quiz/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
