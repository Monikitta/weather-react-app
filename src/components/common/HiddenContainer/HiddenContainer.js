import React, { useContext } from "react";
import './HiddenContainer.scss';
import { WeatherContext } from "../../../Context";


export default function HiddenContainer() {
    const { showHistory, toggleHistory } = useContext(WeatherContext);

    return (
        <div className={`history-container ${showHistory ? "" : "hidden"}`}>
            <div className="hidden-content">
                <button type="button" className="close-btn" onClick={toggleHistory}>
                    X
                </button>
                <h1>Weather History</h1>
                <ul id="output" className="cities"></ul>
            </div>
        </div>
    )
}