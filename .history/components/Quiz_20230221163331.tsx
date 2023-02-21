import React, { useState } from "react";
import Link from "next/link";
import { saveQuizDataFn } from "@/api/quizApi";
import { useSession } from "next-auth/react";

import { Icons } from "@/components/Icons";
import { QuizAnswer } from "./QuizAnswer";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Quiz({ quiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const { data: session } = useSession();
  const user = session?.user;

  const selectAnswer = (answer) => {
    setCurrentAnswer(answer);
    answer.isCorrect === true &&
      setCorrectAnswersCount(correctAnswersCount + 1);
    setDisabled(true);
    setTimeout(function () {
      !showResults && setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer("");
      setDisabled(false);
      currentQuestionIndex === quiz.questions.length - 1 &&
        setShowResults(!showResults);
    }, 1000);
  };

  const handleRetake = () => {
    setCurrentAnswer("");
    setCorrectAnswersCount(0);
    setShowResults(false);
    setCurrentQuestionIndex(0);
  };

  const onCompleteHandle = () => {
    if (user) {
      saveQuizDataFn(quiz._id, correctAnswersCount, quiz.title);
    } else {
      console.log("siema");
    }
  };

  console.log(quiz.question);

  return (
    <div className="container max-w-3xl py-6 dark:text-slate-400 lg:py-10">
      {!showResults ? (
        <div>
          <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
            <p className="text-md">
              {currentQuestionIndex + 1} / {quiz.questions.length}
            </p>
            <h1 className="font-playfair text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
              {quiz.questions[currentQuestionIndex].question}
            </h1>
          </div>
          <div className="my-10 flex flex-col justify-center gap-10">
            {quiz.questions[currentQuestionIndex].answers.map(
              (answer, index) => (
                <QuizAnswer
                  key={index}
                  onSelectAnswer={selectAnswer}
                  answer={answer}
                  disabled={disabled}
                  currentAnswer={currentAnswer}
                />
              ),
            )}
          </div>
          <Separator />
          <div className="flex justify-center py-6 lg:py-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400"
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all quizzes
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <div>
            <h1 className="scroll-m-20 font-playfair text-xl">
              Congratulations! You've finished the <br /> {quiz.title} quiz.
            </h1>
          </div>
          <div>
            <h1 className="mt-10 scroll-m-20 border-b border-b-slate-400 font-playfair text-2xl font-extrabold tracking-tight text-slate-900 dark:border-b-slate-200 dark:text-slate-50">
              Your score:
            </h1>
            <h1 className="font-fraunces mt-2 scroll-m-20 text-7xl font-bold text-slate-900 dark:text-slate-50 ">
              {correctAnswersCount}/{quiz.questions.length}
            </h1>
          </div>
          <h1 className="mt-10 scroll-m-20 font-playfair text-xl">
            Well done! You are a true Potterhead.
          </h1>
          <div className="mt-10 flex flex-row gap-2">
            <Button variant="outline" onClick={() => handleRetake()}>
              Retake the quiz
            </Button>
            <Button onClick={() => onCompleteHandle()}>Complete</Button>
          </div>
        </div>
      )}
    </div>
  );
}
