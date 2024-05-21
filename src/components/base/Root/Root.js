import React from "react";
import LeftContainer from "../LeftContainer"
import RightContainer from "../RightContainer";

import './Root.scss';

export default function Root() {
 
  return (
    <div className="mainContainer">
        <LeftContainer />
        <RightContainer  />    
    </div>
  )
}


