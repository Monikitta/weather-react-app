import React, { useState } from "react";
import './CityInfo.scss';
import cloudy from "../../../assets/Cloudy.svg";

export default function CityInfo({weather}, ) {

  function getDate() {

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const today = new Date();
    const month = today.toLocaleString('default', { month: 'short' })  
    const year = today.getFullYear() % 100;
    const date = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const day = daysOfWeek[today.getDay()]

    return `${hour}:${minutes} - ${day}, ${date} ${month} '${year}`;
  }
  
  const [currentDate,] = useState(getDate());

    return (
    <div className="info-block-container">
        <div className="info-left">
          <p className="degree" id="degree">{weather.temp.toFixed()}°</p>
          <div className="town-date">
            <p className="town" id="town">{weather.name}</p>
            <p className="date">{currentDate}</p>
          </div>
          <img className="image" src={cloudy} id="large-icon" alt="weatther-icon"/>
      </div>
    </div> 
    )
}