import React, { useContext, useEffect } from "react";
import LeftContainer from "../LeftContainer"
import RightContainer from "../RightContainer";
import HiddenContainer from "../../common/HiddenContainer/"; 
import { WeatherContext } from "../../../Context"; 
import useBodyBlur from "../../../useBodyBlur";
import ErrorMessage from "../../common/ErrorMessage";
import './Root.scss';

export default function Root() {
  const { isBlurred, showHistory, bgClass, fetchWeather } = useContext(WeatherContext); 
  useBodyBlur(isBlurred && !showHistory); 

  useEffect(() => {
    document.body.classList.remove(
      'warm-weather', 'default-weather', 
      'warm-weather-tablet', 'default-weather-tablet', 
      'warm-weather-mobile', 'default-weather-mobile'
    );
    if (bgClass) {
      document.body.classList.add(bgClass); 
    }
  }, [bgClass]);

  // const setDefaultBackground = () => {
  //   if (window.matchMedia('(max-width: 426px)').matches) {
  //     return 'default-weather-mobile';
  //   } else if (window.matchMedia('(max-width: 768px)').matches) {
  //     return 'default-weather-tablet';
  //   } else {
  //     return 'default-weather';
  //   }
  // };

  // Set default background image when component mounts
  useEffect(() => {
    //const defaultBgClass = setDefaultBackground();
    //document.body.classList.add(defaultBgClass);
    fetchWeather('La paz'); // Fetch weather data to determine dynamic background
  },[]); // Run only on component mount

  return (
    <div className="rootContainer">
      <HiddenContainer />
      <ErrorMessage />
      <div className={`overlay ${isBlurred ? 'visible' : ''}`}></div>
      <div className={`mainContainer ${isBlurred ? 'blurred' : ''}`}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  )
}

/*
 
  return (
    <div className="mainContainer">
        <LeftContainer />
        <RightContainer  />    
    </div>
  )
*/
//-----

/*
const setDefaultBackground = () => {
    if (window.matchMedia('(max-width: 426px)').matches) {
      return 'default-weather-mobile';
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      return 'default-weather-tablet';
    } else {
      return 'default-weather';
    }
  };

  // Set default background image when component mounts
  useEffect(() => {
    const defaultBgClass = setDefaultBackground();
    document.body.classList.add(defaultBgClass);
    fetchWeather(''); // Fetch weather data to determine dynamic background
  },[]); // Run only on component mount


*/