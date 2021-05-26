import React, { useState } from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar";
import QuestionPage from "./components/QuestionPage";
import { Context } from "./Context";
import "./App.css";

export default function App(): JSX.Element {
  const [subject, setSubject] = useState("general");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  const changeSubject = (subject: string) => {
    setSubject(subject);
    setQuestionNumber(1);
    setLives(3);
  };

  const updateQuestionNumber = (questionNumber: number) => {
    setQuestionNumber(questionNumber);
  };

  const updateLives = (lives: number) => {
    setLives(lives);
    if (lives == 0) {
      setGameOver(true);      
    }
  };

  const endGame = () => {
    setGameOver(false);
    changeSubject(subject);
  }

  if (gameOver) {
    return (
      <div onClick={() => endGame()}>
        <Container maxWidth="sm">
          <img
            src="game-over.png"
            
            className="game-over"
          />
          <div className="score">You answered {questionNumber - 1} questions correctly!</div>
        </Container>
      </div>
    );
  }

  return (
    <div className="App">
      <Context.Provider
        value={{
          subject,
          questionNumber,
          lives,
          changeSubject,
          updateQuestionNumber,
          updateLives,
        }}
      >
        <Navbar />
        <Container maxWidth="sm">
          <QuestionPage />
        </Container>
      </Context.Provider>
    </div>
  );
}
