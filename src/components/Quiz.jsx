import "./css/quiz.css";

import React, { useState } from "react";
export default function Quiz() {
  const questions = [
    {
      questionAsk: "What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?",
      answerOptions: [
        { optionAns: "false", check: false },
        { optionAns: "false", check: false },
        { optionAns: "true", check: true },
        { optionAns: "false", check: false },
      ],
    },
    {
      questionAsk: "What is the right answer?What is the right answer?",
      answerOptions: [
        { optionAns: "false", check: false },
        { optionAns: "false", check: false },
        { optionAns: "true", check: true },
        { optionAns: "false", check: false },
      ],
    },
    {
      questionAsk: "What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?",
      answerOptions: [
        { optionAns: "false", check: false },
        { optionAns: "false", check: false },
        { optionAns: "true", check: true },
        { optionAns: "false", check: false },
      ],
    },
    {
      questionAsk: "What is the right answer?",
      answerOptions: [
        { optionAns: "false", check: false },
        { optionAns: "false", check: false },
        { optionAns: "true", check: true },
        { optionAns: "false", check: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (check) => {
    if (check) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="Quiz">
      {showScore ? (
        <div className="score">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="questions">
            <div className="question_number">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question_asked">
              {questions[currentQuestion].questionAsk}
            </div>
          </div>
          <div className="option_menu">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className="options"
                onClick={() => handleAnswerOptionClick(answerOption.check)}
              >
                {answerOption.optionAns}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
