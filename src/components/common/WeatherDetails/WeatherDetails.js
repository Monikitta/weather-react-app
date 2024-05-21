import React, { useContext } from "react";
import { WeatherContext } from "../../../Context";
import './WeatherDetails.scss';
import tempMax from "../../../assets/temp max.svg";
import tempMin from "../../../assets/temp-min.svg";
import humadity from "../../../assets/humadity.svg";
import smallCloudy from "../../../assets/small-cloudy.svg";
import wind from "../../../assets/wind.svg";

export default function WeatherDetails() {
  const { weather } = useContext(WeatherContext);
 
  return (
    <div className="main-weather">
      <p className="weather-details">Weather Details...</p>

      <div className="weather-container">
        <p className="large-text">{weather.description}</p>
        <div className="weather-info">
          <p className="small-text">Temp max</p>
          <div className="degree-img">
            <p className="info-style" id="tempMax">{typeof weather.temp === 'number' ? weather.temp_max.toFixed() : weather.temp_max}°</p>
            <img className="weather-images" src={tempMax} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Temp min</p>
          <div className="degree-img">
            <p className="info-style" id="tempMin">{typeof weather.temp === 'number' ? weather.temp_min.toFixed() : weather.temp_min}°</p>
            <img className="weather-images" src={tempMin} alt="weather" />  
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Humidity</p>
          <div className="degree-img">
            <p className="info-style" id="humadity">{weather.humidity}%</p>
            <img className="weather-images" src={humadity} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Cloudy</p>
          <div className="degree-img">
            <p className="info-style" id="cloudy">{weather.cloudPercentage}%</p>
            <img className="weather-images" src={smallCloudy} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Wind</p>
          <div className="degree-img">
            <p className="info-style" id="wind">{typeof weather.wind === 'number' ? weather.wind.toFixed() : weather.wind}km/h</p>
            <img className="weather-images" src={wind} alt="weather" />
          </div>
        </div>
      </div>
    </div>

  )
}