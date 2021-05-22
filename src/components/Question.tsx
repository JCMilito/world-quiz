import React, { useContext } from "react";
import { Context } from "../Context";
import QuestionFactory from "../services/QuestionFactory";

type Props = {
  subject: string;
};

export default function Question({ subject }: Props): JSX.Element {  
  const { hits, updateHits } = useContext(Context);

  const pickQuestion = (answer: number, correctIndex: number): void => {
    if (answer == correctIndex) {
      updateHits(hits + 1);
    }
  }

  if (subject == "capitals") {
    const question = QuestionFactory.makeQuestion("capitals");
    return (
      <div className="App">
        <div>{question.query}</div>
        {question.alternatives.map((alternative, index) => (
          <div key={index}>
            <button onClick={() => pickQuestion(index, question.correctIndex)}>{alternative}</button>
          </div>
        ))}
      </div>
    );
  }
  return <div className="App"></div>;
}


