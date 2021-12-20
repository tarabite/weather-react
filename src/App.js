import React from "react";
import Weather from "./Weather";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <Weather />
      </header>
    </div>
  );
}

export default App;
