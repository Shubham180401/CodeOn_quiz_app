import "./css/quiz.css";

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
        <h1>Home</h1>
        <button onClick={() => (window.location.href = "/Quiz")}>
          lets play the game
        </button>
      </div>
    </motion.div>
    </>
  );
}
