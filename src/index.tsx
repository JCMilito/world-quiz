import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import atlas from "./services/Atlas";

if (localStorage.getItem("countries") == null) {
  atlas().then((result) => {
    localStorage.setItem("countries", JSON.stringify(result));
    ReactDOM.render(
      <>
        <App />
      </>,
      document.getElementById("root")
    );
  });
} else {
  ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById("root")
  );
}
