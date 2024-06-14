import React, { useContext } from "react";
import './HiddenContainer.scss';
import { WeatherContext } from "../../../Context";


export default function HiddenContainer() {
    const { showHistory, toggleHistory, history, clearHistory, fetchWeather  } = useContext(WeatherContext);

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('history-container')) {
            toggleHistory();
        }
    };

    const handleCityClick = async (city) => {
        await fetchWeather(city);
        toggleHistory();
    };

    return (
        <div className={`history-container ${showHistory ? "" : "hidden"}`} onClick={handleOverlayClick}>
            <div className="hidden-content" onClick={(e) => e.stopPropagation()}>
                <button type="button" className="close-btn" onClick={toggleHistory}>
                    X
                </button>
                <h2>Searched Locations:</h2>
                <ul id="output" className="cities">
                    {history.slice().reverse().map((city, index) => ( 
                        <li key={index} onClick={() => handleCityClick(city)}>{city}</li>
                    ))}
                </ul>
                <button className="clear-history-btn" onClick={clearHistory}>Clear History</button>
            </div>
        </div>
    )
}

