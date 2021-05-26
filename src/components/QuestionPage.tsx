import { Container } from "@material-ui/core";
import React, { useContext } from "react";

import { Context } from "../Context";
import Question from "./Question";

export default function QuestionPage(): JSX.Element {
  const { subject, questionNumber } = useContext(Context);
  let newSubject = subject;

  if (subject == "general") {
    if (questionNumber % 3 == 1) {
      newSubject = "capitals";
    }
    if (questionNumber % 3 == 2) {
      newSubject = "regions";
    }
    if (questionNumber % 3 == 0) {
      newSubject = "flags";
    }
  }

  return (
    <div className="App">
      <Container maxWidth="xs">
        <Question subject={newSubject} />        
      </Container>
    </div>
  );
}
