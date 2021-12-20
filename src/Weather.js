import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }

  let apiKey = "93f3a8747a9ff1ebceb2f52d70ba80cb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return <h2>Hello from Weather App</h2>;
}
