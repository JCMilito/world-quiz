import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { Context } from "./Context";

export default function App(): JSX.Element {
  const [subject, setSubject] = useState('');
  
  function change(subject: string) {
    setSubject(subject);
  }

  const Subject = () => {
    const { subject } = useContext(Context);
    return <div><Question subject={subject} /></div>;
  };  

  return (
    <div className="App">
      <Context.Provider value={{ subject, change }}>
        <Navbar />
        <Subject />
      </Context.Provider>
    </div>
  );
}
