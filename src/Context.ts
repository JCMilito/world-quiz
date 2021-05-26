import { createContext } from "react";

export const Context = createContext({
  subject: '',
  questionNumber: 0,
  lives: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  changeSubject: (subject: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  updateQuestionNumber: (questionNumber: number) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  updateLives: (lives: number) => {}
});
