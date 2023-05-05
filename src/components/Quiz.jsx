import "./css/quiz.css";

import React, { useState } from "react";

// animation npm
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Quiz() {
  const questions = [
    {
      questionAsk:
        "What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?",
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
      questionAsk:
        "What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?What is the right answer?",
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

  // quiz hooks for the quiz segments
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

  // animation from motiondiv
  const placeholderText = [
    { type: "heading1", text: 'You scored ${score} out of ${questions}' },
  ];
  const updatedPlaceholderText = [...placeholderText];
  updatedPlaceholderText[0].text = `You scored ${score} out of ${questions}`;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="Quiz">
        {showScore ? (
          <motion.div
            //   className="App"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <div className="score">
              {/* You scored {score} out of {questions.length} */}
              {updatedPlaceholderText.map((item, index) => {
                 return <AnimatedText {...item} key={index} />;
              })}
              <button onClick={() => window.location.href='Home'}>Go to About page</button>
            </div>
          </motion.div>
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
                <button
                  className="options"
                  onClick={() => handleAnswerOptionClick(answerOption.check)}
                >
                  {answerOption.optionAns}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
