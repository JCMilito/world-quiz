import React from 'react';

type Props = {
  subject: string
}

export default function Question({subject}: Props): JSX.Element {
  
  return (
    <div className="App">
      Question {subject}
    </div>
  );
}