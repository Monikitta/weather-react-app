import React, { createContext, useState, useEffect } from 'react';
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
        dt: Date.now(),
        main: {
          temp: '19', 
        },
        weather: [{  
          description: 'Snow', 
        }]
      },
    ]
  });
  
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('searchHistory', JSON.stringify(history));
    } catch (error) {
      if (error.name === 'QuotaExceededError') {
        alert("Local storage limit exceeded!");
      }
      console.error("Error saving to local storage", error);
    }
  }, [history]);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const addToHistory = (city) => {
    if (!history.includes(city)) {
      setHistory([...history, city]);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem('searchHistory');
    setHistory([]);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather, showHistory, toggleHistory, history, addToHistory, clearHistory }}>
      {children}
    </WeatherContext.Provider>
  );
};