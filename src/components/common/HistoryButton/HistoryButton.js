    import React, { useContext } from "react";
    import './HistoryButton.scss';
    import { WeatherContext } from "../../../Context";


    export default function HistoryButton() {
        const { toggleHistory, setInput  } = useContext(WeatherContext);

        const handleToggleHistory = () => {
            toggleHistory();
            setInput('');
        };
        
        return (
            <div>
                <button className="history-button" onClick={handleToggleHistory} >Search History</button> 
            </div> 
        )
    }

