import React from "react";
import './WeatherDetails.scss';
import tempMax from "../../../assets/temp max.svg";
import tempMin from "../../../assets/temp-min.svg";
import humadity from "../../../assets/humadity.svg";
import smallCloudy from "../../../assets/small-cloudy.svg";
import wind from "../../../assets/wind.svg";

export default function WeatherDetails({weather}) {
  return (
    <div className="main-weather">
      <p className="weather-details">Weather Details...</p>

      <div className="weather-container">
        <p className="large-text">THUNDERSTORM WITH LIGHT DRIZZLE</p>

        <div className="weather-info">
          <p className="small-text">Temp max</p>
          <div className="degree-img">
            <p className="info-style" id="tempMax">{weather.max.toFixed()}°</p>
            <img className="weather-images" src={tempMax} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Temp min</p>
          <div className="degree-img">
            <p className="info-style" id="tempMin">{weather.min.toFixed()}°</p>
            <img className="weather-images" src={tempMin} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Humadity</p>
          <div className="degree-img">
            <p className="info-style" id="humadity">{weather.humadity}%</p>
            <img className="weather-images" src={humadity} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Cloudy</p>
          <div className="degree-img">
            <p className="info-style" id="cloudy">{weather.cloudy}%</p>
            <img className="weather-images" src={smallCloudy} alt="weather" />
          </div>
        </div>
        <div className="weather-info">
          <p className="small-text">Wind</p>
          <div className="degree-img">
            <p className="info-style" id="wind">{weather.wind}km/h</p>
            <img className="weather-images" src={wind} alt="weather" />
          </div>
        </div>
      </div>
    </div>

  )
}