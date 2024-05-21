import React, { useState, useContext } from "react";
import axios from "axios";
import { WeatherContext } from "../../../Context";
import "./SearchBar.scss";
//import search from "../../../assets/fa_search.svg"

export default function SearchBar() {
  const [input, setInput] = useState('');
  const { setWeather, addToHistory  } = useContext(WeatherContext);
  const API_KEY = "12b1eb481bae9424d0d8f352708b1f64";

  const handleInputChange = (e) => {
    const value = e.target.value;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setInput(capitalizedValue);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`);
      const { name, main, clouds, wind, weather } = response.data;

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`);
      const forecastData = forecastResponse.data.list.slice(0, 8); // First 24 hours (8 intervals of 3 hours each)    

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
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
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
          onChange={handleInputChange} />
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  )
} 