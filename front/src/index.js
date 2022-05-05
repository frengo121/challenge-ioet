import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Exercise from "./components/Exercise";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Description />
    <Exercise />
  </React.StrictMode>,
  document.getElementById("root")
);
