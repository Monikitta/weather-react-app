import React from "react";
import './Forecast.scss';
import snowhite from "../../../assets/Snowhite.svg";

export default function Forecast({weather}) {
    return (
        <div className="main-forecast">
           <p class="weather-forecast">Today's Weather Forecast...</p>
            <div className="forecast">
              <div className="forecast-info">
               <img src={snowhite} alt="forecast"/>
               <div className="forecast-time">
                  <p className="info-style">09:00</p>
                  <p className="small-text">{weather.forecast}</p>
               </div>  
              </div>
            <p className="forecast-degree">{weather.temp.toFixed()}°</p>
           </div>
        </div>
    )
}