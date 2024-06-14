import React, { useState, useContext } from "react";
import { WeatherContext } from "../../../Context";
import './CityInfo.scss';
import cloudy from "../../../assets/Cloudy.svg";

export default function CityInfo() {
  const { weather } = useContext(WeatherContext);

  function getDate() {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' })
    const year = today.getFullYear() % 100;
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes().toString().padStart(2, '0');;
    const day = daysOfWeek[today.getDay()]

    return `${hour}:${minutes} - ${day}, ${date} ${month} '${year}`;
  }

  const [currentDate] = useState(getDate());

  return (
    <div className="info-block-container">
      <div className="info-left">
        <p className="degree" id="degree">{typeof weather.temp === 'number' ? weather.temp.toFixed() : weather.temp}°</p>
        <div className="town-date">
          <p className="town" id="town">{weather.city}</p>
          <p className="date">{currentDate}</p>
        </div>
        <img
          src={weather.icon === cloudy ? cloudy : weather.icon}
          alt="Weather icon"
          className="img-icon"
        />
      </div>
    </div>
  )
}

/*  {weather.icon && <img src={weather.icon} alt="Weather icon" className="img-icon"/>}  */