import "./css/quiz.css";

// import Quiz from "./Quiz";

import React from "react";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Home</h1>
        <button onClick={() => (window.location.href = "/Quiz")}>
          Go to About page
        </button>
      </div>
    </>
  );
}
