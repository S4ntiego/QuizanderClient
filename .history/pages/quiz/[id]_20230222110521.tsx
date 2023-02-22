import React from "react";
import { Quiz } from "@/components/Quiz";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

export const getQuizFn = async (id) => {
  const response = await axios.get(`http://localhost:3000/api/quiz/${id}`);
  return response.data;
};

const Siema = ({ quiz }) => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data: quizzes } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => getQuizFn(id),
  });
  return <Quiz quiz={quiz} />;
};

export default Siema;
