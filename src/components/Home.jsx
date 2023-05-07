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
          <div className="name">
            <the>the</the>
            <quiz>Quiz</quiz>
            <game>game</game>
          </div>
          <div className="discription">
            the game for club weekly project submission should not consider as
            final project, this may ends up with major changes.
            <br />
            <br />
            made by :-
            <name>
              <br /><name>Anjail &</name>
              <br /><name>vikas ,</name>
              <br /><name>Shubham</name>
            </name>
          </div>
          <button
            className="home-btn"
            onClick={() => (window.location.href = "/Quiz")}
          >
            lets play the game
          </button>
          {/* end here */}
        </div>
      </motion.div>
    </>
  );
}
