import React, { useContext } from "react";
import { WeatherContext } from "../../../Context";
import './Forecast.scss';
import snowhite from "../../../assets/Snowhite.svg";

export default function Forecast() {
  const { weather } = useContext(WeatherContext);

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div className="main-forecast">
      <p className="weather-forecast">Today's Weather Forecast...</p>
      {weather.forecast.map((item, index) => (
        <div key={index} className="forecast">
          <div className="forecast-info">

            {item.weather[0].icon ? (
              <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="forecast-icon"
              />
            ) :
              (
                <img src={snowhite}
                  alt='snowhite'
                  className="forecast-icon"
                />
              )
            }
            <div className="forecast-time">
              <p className="info-style">{formatTime(item.dt)}</p>
              <p className="small-text">{item.weather[0].description}</p>
            </div>
          </div>
          <p className="forecast-degree">{typeof item.main.temp === 'number' ? item.main.temp.toFixed() : item.main.temp}°</p>
        </div>
      ))}
    </div>
  )
}

/* src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} */