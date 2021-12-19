import React from "react";
import Weather from "./Weather";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>
          To Start or Stop the Terminial server:
          <br />
          Type "npm start"
          <br />
          To stop the server, go to terminal, select node and type "ctrl+c"
        </p>
        <Weather />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
