import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { WeatherContext } from "../../../Context";
import "./SearchBar.scss";

export default function SearchBar() {
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const { setWeather, addToHistory, setBgClass, storageFullError, clearHistory, setInput, input } = useContext(WeatherContext);
  const API_KEY = "12b1eb481bae9424d0d8f352708b1f64";

  const handleInputChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInput(capitalizedValue);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (storageFullError) {
      setError(storageFullError);
      return;
    }

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`);
      const { name, main, clouds, wind, weather } = response.data;

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`);
      const forecastData = forecastResponse.data.list.slice(0, 8);

      setWeather({
        city: name,
        temp: main.temp,
        temp_max: main.temp_max,
        temp_min: main.temp_min,
        humidity: main.humidity,
        cloudPercentage: clouds.all,
        wind: wind.speed,
        description: weather[0].description,
        icon: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        forecast: forecastData
      });

      addToHistory(name);
      setInput('');
      setError(null);

      const isMobile = window.matchMedia('(max-width: 426px)').matches;
      const isTablet = window.matchMedia('(max-width: 768px)').matches;

      if (main.temp_min > 10) {
        if (isMobile) {
          setBgClass('warm-weather-mobile');
        } else if (isTablet) {
          setBgClass('warm-weather-tablet');
        } else {
          setBgClass('warm-weather');
        }
      } else {
        if (isMobile) {
          setBgClass('default-weather-mobile');
        } else if (isTablet) {
          setBgClass('default-weather-tablet');
        } else {
          setBgClass('default-weather');  
        }
      }
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError("Location not found. Please try again.");
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          autoComplete="off"
          name="city"
          placeholder="Search Location..."
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button className="search-button" type="submit"></button>
      </form>
      {error && (
        <div className="error-modal">
          <div className="error-content">
            <p>{error}</p>
            <button onClick={handleCloseError}>Close</button>
            {storageFullError && (
              <button onClick={clearHistory} className="clear-history-button">Clear History</button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

