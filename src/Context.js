import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
//import cloudy from "./assets/Cloudy.svg";
import axios from 'axios';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({
    city: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    humidity: '',
    description: '',
    cloudPercentage: '',
    wind: '',
    icon: '',
    forecast: [
      {
        dt: Date.now(),
        main: {
          temp: '',
        },
        weather: [{
          description: '',
        }]
      },
    ]
  });

  const [showHistory, setShowHistory] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [bgClass, setBgClass] = useState(''); //
  const [storageFullError, setStorageFullError] = useState(null);
  const [input, setInput] = useState('');
  const API_KEY = "12b1eb481bae9424d0d8f352708b1f64";

  const initialHistory = useMemo(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  }, []);

  const [history, setHistory] = useState(initialHistory);

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

  const fetchWeather = useCallback(async (city = 'London') => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const { name, main, clouds, wind, weather } = response.data;

      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
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

      updateBackgroundClass(main.temp_min);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }, [API_KEY]);

  const updateBackgroundClass = (temp_min) => {
    const isMobile = window.matchMedia('(max-width: 426px)').matches;
    const isTablet = window.matchMedia('(max-width: 768px)').matches;

    if (temp_min > 10) {
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
  };

  useEffect(() => {
    const handleResize = () => updateBackgroundClass(weather.temp_min);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [weather.temp_min]);

  const MAX_HISTORY_LENGTH = 10;

  const toggleHistory = () => {
    setShowHistory(!showHistory);
    setIsBlurred(prev => !prev);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('weatherHistory');
    setStorageFullError(null);
  };

  const addToHistory = (city) => {
    if (history.length >= MAX_HISTORY_LENGTH) {
      setStorageFullError('Storage is full. Please clear history.');
    } else if (!history.includes(city)) {
      const newHistory = [...history, city];
      setHistory(newHistory);
      localStorage.setItem('weatherHistory', JSON.stringify(newHistory));
      setStorageFullError(null);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        showHistory,
        toggleHistory,
        history,
        addToHistory,
        clearHistory,
        isBlurred,
        bgClass,
        setBgClass,
        fetchWeather,
        storageFullError,
        input,
        setInput 
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

