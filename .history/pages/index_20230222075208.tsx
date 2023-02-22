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

export default function BlogPage() {
  const quizzes = useQuery({
    queryKey: ["quizzes"],
    queryFn: () => axios.get("http://localhost:3000/api/quiz/get-quizzes"),
    select: (data) => JSON.parse(JSON.stringify(data.data)),
    onSuccess: () => console.log(quizzes),
  });
  return <div>xD</div>;
}

BlogPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
