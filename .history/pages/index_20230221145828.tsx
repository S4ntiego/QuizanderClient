import LandingLayout from "@/components/LandingLayout";
import React from "react";

import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Quiz {
  _id: string;
  title: string;
  description: string;
  category: string;
  questions?: [];
  coverImage: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/quiz/get-quizzes");
  const quizzes = await res.json();

  return { props: { quizzes } };
}

export default function BlogPage({ quizzes }) {
  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="font-sans text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Harry Potter Trivia
        </h1>
        <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
          Verify your knowledge about the universe.
        </p>
      </div>

      <div className="relative flex space-x-4">
        {quizzes.map((quiz) => (
          <QuizArtwork key={quiz.title} quiz={quiz} className="w-96" />
        ))}
      </div>
    </section>
  );
}

interface QuizArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  quiz: Quiz;
  aspectRatio?: number;
}

function QuizArtwork({
  quiz,
  aspectRatio = 4 / 3,
  className,
  ...props
}: QuizArtworkProps) {
  return (
    <article className={cn("group relative space-y-3", className)} {...props}>
      <Link href={`/quizzes/${quiz._id}`}>
        <AspectRatio ratio={aspectRatio} className="overflow-hidden rounded-md">
          <Image
            priority
            src={quiz.coverImage}
            alt={quiz.title}
            fill
            sizes="(min-width: 60em) 24vw,
            (min-width: 28em) 45vw,
            100vw"
            className="object-cover transition-all hover:scale-105"
          />
        </AspectRatio>
        <div className="mt-2 space-y-1 text-sm">
          <h3 className="text-2xl font-bold leading-none">{quiz.title}</h3>
          <p className="text-normal text-slate-500 dark:text-slate-400">
            {quiz.description}
          </p>
          {quiz.createdAt && (
            <p className="text-xs text-slate-600">
              {formatDate(quiz?.createdAt)}
            </p>
          )}
          <span className="sr-only">Play Quiz</span>
        </div>
      </Link>
    </article>
  );
}

BlogPage.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
