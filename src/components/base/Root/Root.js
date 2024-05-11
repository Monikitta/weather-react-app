import React from "react";
import LeftContainer from "../LeftContainer"
import RightContainer from "../RightContainer";
import './Root.scss';

export default function Root() {

  const weather = {
    name: 'Burgas',
    temp: 20.97,
    max: 23.06,
    min: 20.97,
    humadity: 70,
    cloudy: 20,
    wind: 3.6,
    forecast: 'clouds'
  };

    return  (
        <div className="mainContainer">
          <LeftContainer weather={weather} />
          <RightContainer weather={weather} />
        </div>
    )
}


