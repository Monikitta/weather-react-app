import React, { createContext, useState } from 'react';
import cloudy from "./assets/Cloudy.svg";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    city: 'London',
    temp: '16',
    temp_max: '19',
    temp_min: '15',
    humidity: '58',
    description: 'THUNDERSTORM WITH LIGHT DRIZZLE',
    cloudPercentage: '86',
    wind: '5',
    icon: cloudy,
    forecast: [
      {
        dt: Date.now(), // Default date
        main: {
          temp: '19', // Default temperature
        },
        weather: [{  
          description: 'Snow', // Default weather description
        }]
      },
    ]
  });

  const [showHistory, setShowHistory] = useState(false);

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather, showHistory, toggleHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};