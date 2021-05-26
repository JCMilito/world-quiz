import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./index.css";
import App from "./App";
import atlas from "./services/Atlas";

if (localStorage.getItem("countries") == null) {
  atlas().then((result) => {
    localStorage.setItem("countries", JSON.stringify(result));
    ReactDOM.render(
      <>
        <ToastContainer/>
        <App />
      </>,
      document.getElementById("root")
    );
  });
} else {
  ReactDOM.render(
    <>
      <ToastContainer />
      <App />
    </>,
    document.getElementById("root")
  );
}
