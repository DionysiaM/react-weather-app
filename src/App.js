import "./App.css";
import Weather from "./Weather";
import "./index.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This application was coded by{" "}
          <a
            href="https://festive-edison-7f3e14.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dionysia Mastorou
          </a>{" "}
          and it is{" "}
          <a
            href="https://github.com/DionysiaM/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub.{" "}
        </footer>
      </div>
    </div>
  );
}
