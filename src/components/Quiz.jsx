import "./css/quiz.css";

import questions from './questions.json';

import React, { useState } from "react";

import Result from './Result';

// animation npm
import { motion , AnimatePresence } from "framer-motion";

export default function Game() {

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

  var resultAnouncement = "You scored ${score} out of ${questions.length}";
  // animation from motiondiv
  const placeholderText = [{ type: "heading1", text: { resultAnouncement } }];

  const updatedPlaceholderText = [...placeholderText];
  updatedPlaceholderText[0].text = `You scored ${score} out of ${questions.length}`;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <>
      <motion.div
        // className="container text-center  bg-black"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="Quiz">
          {showScore ? (
            <>
              <Result score={score} />
            </>
          ) : (
            <div className="panel">
              <div className="questions">
                <div className="question_number">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <AnimatePresence>
                  <motion.div
                    className="question_asked"
                    key={currentQuestion} // Add a unique key to the animated div
                    initial={{ height: 10 }}
                    animate={{ height: "auto" }}
                    exit={{ display: "none" }}
                    transition={{ duration: 0.5 }}
                  >
                    {questions[currentQuestion].questionAsk}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="option_menu">
                {questions[currentQuestion].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="options"
                      onClick={() =>
                        handleAnswerOptionClick(answerOption.check)
                      }
                    >
                      {answerOption.optionAns}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
