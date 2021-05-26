import { Container } from "@material-ui/core";
import React from "react";
import { useContext } from "react";

import { Context } from "../Context";
import Country from "../model/Country";
import Button from "./Button";
import "./Question.css";

type Props = {
  subject: string;
};

export default function Question({ subject }: Props): JSX.Element {
  const { questionNumber, lives, updateQuestionNumber, updateLives } =
    useContext(Context);

  const pick = (answer: number, correctIndex: number): void => {
    if (answer != correctIndex) {
      updateLives(lives - 1);
    }
    updateQuestionNumber(questionNumber + 1);
  };

  // eslint-disable-next-line
  const countries: Country[] = JSON.parse(localStorage.getItem("countries")!);
  const country = countries[Math.floor(Math.random() * countries.length)];

  if (subject == "capitals") {
    const query = "What is the capital of " + country.name + "?";
    const correctIndex = Math.floor(Math.random() * 4);
    const alternatives: string[] = [];
    for (let i = 0; i < 4; i++) {
      if (i == correctIndex) {
        alternatives[i] = country.capital;
      } else {
        const capital =
          countries[Math.floor(Math.random() * countries.length)].capital;
        if (!alternatives.includes(capital) && capital != country.capital) {
          alternatives[i] = capital;
        } else {
          i--;
        }
      }
    }
    return (
      <div className="App">
        <div className="query">{query}</div>
        <Container>
          {alternatives.map((alternative, index) => (
            <div key={index}>
              <Button
                color="purple"
                handleClick={() => pick(index, correctIndex)}
              >
                {alternative}
              </Button>
            </div>
          ))}
        </Container>
      </div>
    );
  }

  if (subject == "regions") {
    const query = "In what region is " + country.name + " located?";
    const correctIndex = Math.floor(Math.random() * 4);
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const alternatives: string[] = [];
    for (let i = 0; i < 4; i++) {
      if (i == correctIndex) {
        alternatives[i] = country.region;
      } else {
        const region = regions[Math.floor(Math.random() * regions.length)];
        if (!alternatives.includes(region) && region != country.region) {
          alternatives[i] = region;
        } else {
          i--;
        }
      }
    }
    return (
      <div className="App">
        <div className="query">{query}</div>
        <Container>
          {alternatives.map((alternative, index) => (
            <div key={index}>
              <Button
                color="purple"
                handleClick={() => pick(index, correctIndex)}
              >
                {alternative}
              </Button>
            </div>
          ))}
        </Container>
      </div>
    );
  }

  const correctIndex = Math.floor(Math.random() * 4);
  const alternatives: string[] = [];
  for (let i = 0; i < 4; i++) {
    if (i == correctIndex) {
      alternatives[i] = country.name;
    } else {
      const name = countries[Math.floor(Math.random() * countries.length)].name;
      if (!alternatives.includes(name) && name != country.capital) {
        alternatives[i] = name;
      } else {
        i--;
      }
    }
  }
  return (
    <div className="App">
      <Container maxWidth="sm">
      <img src={country.flag} className="flag"></img>
      </Container>
      
      <Container>
        {alternatives.map((alternative, index) => (
          <div key={index}>
            <Button
              color="purple"
              handleClick={() => pick(index, correctIndex)}
            >
              {alternative}
            </Button>
          </div>
        ))}
      </Container>
    </div>
  );
}
