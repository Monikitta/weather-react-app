import React, { useContext, useEffect } from "react";
import LeftContainer from "../LeftContainer"
import RightContainer from "../RightContainer";
import HiddenContainer from "../../common/HiddenContainer/"; 
import { WeatherContext } from "../../../Context"; 
import useBodyBlur from "../../../useBodyBlur";
import ErrorMessage from "../../common/ErrorMessage";
import './Root.scss';

export default function Root() {
  const { isBlurred, showHistory, bgClass, fetchWeather, toggleHistory  } = useContext(WeatherContext); 
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

  useEffect(() => {
 
    fetchWeather('La paz'); 
  },[]); 

  const handleOverlayClick = () => {  /// !
    if (showHistory) {
      toggleHistory();
    }
  };

  return (
    <div className="rootContainer">
      <HiddenContainer toggleHistory={toggleHistory}/>
      <ErrorMessage />
      <div className={`overlay ${isBlurred ? 'visible' : ''}`} onClick={handleOverlayClick}></div>
      <div className={`mainContainer ${isBlurred ? 'blurred' : ''}`}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  )
}

