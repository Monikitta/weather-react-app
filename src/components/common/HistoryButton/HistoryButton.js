import React, { useContext } from "react";
import './HistoryButton.scss';
import { WeatherContext } from "../../../Context";


export default function HistoryButton(params) {
    const { toggleHistory } = useContext(WeatherContext);

    return (
        <div>
            <button className="history-button" onClick={toggleHistory}>Weather History</button>
        </div> 
    )
}