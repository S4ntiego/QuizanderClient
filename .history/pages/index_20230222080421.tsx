import LandingLayout from "@/components/LandingLayout";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import axios from "axios";

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  questions?: [];
  coverImage: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export const getQuizzesFn = async () => {
  const response = await axios.get(
    `http://localhost:3000/api/quiz/get-quizzes`,
  );
  return response;
};

export default function BlogPage() {
  const { isLoading, data: quizzes } = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => getQuizzesFn(),
  });
  return <div>siema</div>;
}

BlogPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
