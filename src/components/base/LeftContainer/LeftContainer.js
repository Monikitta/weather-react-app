import React from "react";
import Logo from "../../pure/Logo";
import CityInfo from "../../common/CityInfo";

import './LeftContainer.scss'
import SearchBar from "../../common/SearchBar";
import HistoryButton from "../../common/HistoryButton";

export default function LeftContainer({ weather }) {

  const currentDate = new Date();


  return (
    <div className="left-container">
      <Logo />
      <div className="show-on-mobile">
        <SearchBar /> 
        <HistoryButton />
      </div>
      <CityInfo currentDate={currentDate} />
    </div>

  )
}