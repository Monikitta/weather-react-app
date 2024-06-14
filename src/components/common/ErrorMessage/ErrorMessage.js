import React, { useContext } from 'react';
import { WeatherContext } from '../../../Context';
import "./ErrorMessage.scss";

const ErrorMessage = () => {
  const { errorMessage } = useContext(WeatherContext);

  if (!errorMessage) return null;

  return (
    errorMessage && (
      <div className="errorMessage"> 
        {errorMessage}
      </div>
    )
  );
};

export default ErrorMessage;