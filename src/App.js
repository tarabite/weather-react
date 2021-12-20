import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <small>
        Open-sourced on{" "}
        <a href="https://github.com/tarabite/weather-react" target="_blank">
          GitHub
        </a>{" "}
        by Tara Diego
        <br />
        Hosted on
        <a href="" target="_blank">
          Netlify
        </a>
      </small>
    </div>
  );
}

export default App;
