import React from "react";
import './HiddenContainer.scss';


export default function HiddenContainer(params) {
    return (
        <div>
            <div className="history-container hidden">
                <button type="button" className="close-btn">X</button>
                <h1>Weather History</h1>
                <ul id="output" className="cities"></ul>
            </div>
        </div>
    )
}