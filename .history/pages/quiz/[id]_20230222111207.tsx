import React from "react";
import { Quiz } from "@/components/Quiz";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

export const getQuizFn = async (id) => {
  console.log(id);
  const response = await axios.get(`http://localhost:3000/api/quiz/${id}`);
  const quez = response.data;
  console.log("xD");
  console.log(quez);
  return quez;
};

const Siema = () => {
  const router = useRouter();
  const { id } = router.query;

  const { isLoading, data: quiz } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => axios.get(`http://localhost:3000/api/quiz/${id}`),
  });

  console.log(quiz);
  return <div />;
};

export default Siema;
