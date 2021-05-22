import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { Context } from "./Context";

export default function App(): JSX.Element {
  const [subject, setSubject] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);
  const [hits, setHits] = useState(0);
  
  
  function changeSubject(subject: string) {
    setSubject(subject);
    setQuestionNumber(1);
    setHits(0);
  }

  function updateQuestionNumber(questionNumber: number) {
    setQuestionNumber(questionNumber);
  }

  function updateHits(hits: number) {
    setHits(hits);
  }

  const CurrentQuestion = () => {
    const { subject } = useContext(Context);
    return <div><Question subject={subject} /></div>;
  };  

  return (
    <div className="App">
      <Context.Provider value={{ subject, questionNumber, hits, changeSubject, updateQuestionNumber, updateHits }}>
        <Navbar />
        <CurrentQuestion />
      </Context.Provider>
     </div>
  );
}
