import React, { useState } from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar";
import QuestionPage from "./components/QuestionPage";
import { Context } from "./Context";

export default function App(): JSX.Element {
  const [subject, setSubject] = useState("general");
  const [questionNumber, setQuestionNumber] = useState(1);
  const [lives, setLives] = useState(3);

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
  };

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
