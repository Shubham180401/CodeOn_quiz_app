import "./css/quiz.css";
import "./css/home.css";
// import Quiz from "./Quiz";

import React from "react";

// animation npm
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
    <motion.div
      // className="container text-center  bg-black"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="home">

        {/* start from here */}
<header >
		<h1>Quiz App</h1>
	</header>

        <main>
		<section class="intro">
			<h2 style="font-size: 26px;text-align: center;">Welcome to the Quiz App</h2>
			<p style="text-align: center;">Test your knowledge with these quizzes!</p>    
		</section>
	</main>
        <button class="start-button" onClick={() => (window.location.href = "/Quiz")}>
         Start Quiz
        </button>
        {/* end here */}
      
      </div>
    </motion.div>
    </>
  );
}
