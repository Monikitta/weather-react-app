import React, { useContext } from "react";
import LeftContainer from "../LeftContainer"
import RightContainer from "../RightContainer";
import HiddenContainer from "../../common/HiddenContainer/"; //
import { WeatherContext } from "../../../Context"; //
import useBodyBlur from "../../../useBodyBlur";
import './Root.scss';

export default function Root() {
  const { isBlurred, showHistory } = useContext(WeatherContext); //
  useBodyBlur(isBlurred && !showHistory); // 


  return (
    <div className="rootContainer">
      <HiddenContainer />
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
