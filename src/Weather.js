import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>Copenhagen</h1>
        <ul>
          <li>Sunday 12:14</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-5">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />

            <span className="temperature">{Math.round(temperature)} </span>
            <span className="unit">℃</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 18%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 13km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8e47eb2a9db2f234f7a0f457faa90ade";
    let city = "Copenhagen";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
