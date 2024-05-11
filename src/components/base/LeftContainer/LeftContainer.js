import React from "react";
import Logo from "../../pure/Logo";
import CityInfo from "../../common/CityInfo";
import HiddenContainer from "../../common/HiddenContainer/";
import './LeftContainer.scss'

export default function LeftContainer({weather}) {

    return (
      <div className="left-container">    
        <Logo />  
        <HiddenContainer />  
        <CityInfo weather={weather} currentDate={currentDate}/>
      </div> 

    )
}