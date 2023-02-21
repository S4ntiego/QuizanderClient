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

  return <div>siema</div>;
}
