import React from "react";
import Weather from "./Weather";
import Forecast from "./Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <hr />
        <Forecast />
      </header>
      <small>
        Open-sourced on{" "}
        <a href="https://github.com/tarabite/weather-react">GitHub</a> by Tara
        Diego
        <br />
        Hosted on{" "}
        <a href="https://app.netlify.com/sites/epic-mcnulty-bcbc4b/overview">
          Netlify
        </a>
      </small>
    </div>
  );
}

export default App;
