import React from "react";
import { useRouter } from "next/router";
import { Quiz } from "@/components/Quiz";
import { cache } from "react";

export async function quizPage({ quiz }) {
  return <div>siema</div>;
}

export default quizPage;

export const getServerSideProps = async ({ context, req }) => {
  console.log(context);

  return;
};
