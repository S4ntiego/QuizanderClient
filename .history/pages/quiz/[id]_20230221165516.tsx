import React from "react";
import { useRouter } from "next/router";
import { Quiz } from "@/components/Quiz";

export async function getQuiz(id: string) {
  return await fetch(`http://localhost:3000/api/quiz/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function Siema() {
  const router = useRouter();
  const { id } = router.query;
  const quiz = await getQuiz(id as string);
  return <div>siema</div>;
}

export default Siema;
