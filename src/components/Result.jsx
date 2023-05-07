import "./css/quiz.css";

// import IconHome from './icons/home.png';

import questions from './questions.json';


import React, { useState } from "react";

// animation npm
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

export default function Result(props) {

  var resultAnouncement = "You scored ${score} out of ${questions.length}";
  // animation from motiondiv
  const placeholderText = [{ type: "heading1", text: { resultAnouncement } }];

  const updatedPlaceholderText = [...placeholderText];
  updatedPlaceholderText[0].text = `You scored ${props.score} out of ${questions.length}`;

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
        <div className="Result">
          
            <motion.div
              // className="container text-center  bg-black"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="panel">
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

                    <motion.button
                      onClick={() => {
                        (document.querySelector('.invisible').style.display = 'none');
                        (window.location.href = "Home");
                        }
                      }

                      // initial={{ y: 50, opacity: 0 }}
                      // animate={{ y: 0, opacity: 1 }}
                      // exit={{ y: 50, opacity: 0 }}
                      // transition={{ duration: 1 }}
                      // whileHover={{scale: 1.1}}
                      // whileTap={{scale: 10}}
                      className="btn"
                      
                    >
                      {/* <img src={IconHome} alt="home" /> */}
                      <div className="invisible">
                        goto home
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          
        </div>
      </motion.div>
    </>
  );
}
