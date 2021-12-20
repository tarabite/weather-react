import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function showConditions(response) {
    setLoaded(true);

    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "93f3a8747a9ff1ebceb2f52d70ba80cb";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showConditions);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchForm" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <input
            type="search"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
        </div>

        <div className="col-3">
          {" "}
          <input type="submit" value="Search" className="bigButtons" />
        </div>
        <div className="col-3">
          <input type="submit" value="Current" className="bigButtons" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="row searchResults">
          <div className="col-sm-6">
            <div className="clearfix">
              <div className="float-left weatherImage">
                <img src={weather.icon} alt={weather.description} />
              </div>
              <div className="bigTemp">{Math.round(weather.temperature)}</div>
              <div className="weatherUnits">℃</div>
            </div>
          </div>

          <div className="col-sm-6">
            <ul>
              <li>Description: {weather.description}</li>
              <li>Wind: {Math.round(weather.wind)}km/h</li>
              <li>Humidity: {weather.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
