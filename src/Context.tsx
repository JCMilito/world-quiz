import { createContext } from "react";

export const Context = createContext({
  subject: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  change: (subject: string) => {}
});




