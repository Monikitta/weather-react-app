import React, { useContext } from "react";
import './HiddenContainer.scss';
import { WeatherContext } from "../../../Context";


export default function HiddenContainer() {
    const { showHistory, toggleHistory, history, clearHistory } = useContext(WeatherContext);

    return (
        <div className={`history-container ${showHistory ? "" : "hidden"}`}>
            <div className="hidden-content">
                <button type="button" className="close-btn" onClick={toggleHistory}>
                    X
                </button>
                <h2>Searched Locations:</h2>
                <ul id="output" className="cities">
                    {history.map((city, index) => ( 
                        <li key={index}>{city}</li>
                    ))}
                </ul>
                <button className="clear-history-btn" onClick={clearHistory}>Clear History</button>
            </div>
        </div>
    )
}