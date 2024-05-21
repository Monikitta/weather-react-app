import React from 'react';
import SearchBar from "../../common/SearchBar";
import HistoryButton from '../../common/HistoryButton';
import WeatherDetails from '../../common/WeatherDetails';
import Forecast from '../../common/Forecast';
import './RightContainer.scss';

export default function RightContainer() {
    
    return (
        <div className="right-container">  
                <SearchBar />
                <HistoryButton />
                <WeatherDetails />
                <Forecast />
        </div>
    )

}