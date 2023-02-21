import React from "react";
import { useRouter } from "next/router";

export async function getQuiz(id: string) {
  return await fetch(`http://localhost:3000/api/quiz/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

const Siema = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <div>Siema</div>;
};

export default Siema;
