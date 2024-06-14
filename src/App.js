import React from "react";
import { WeatherProvider } from "./Context";
import Root from "./components/base/Root";
import './index.scss'

function App() {
  return (
    <WeatherProvider>
      <Root />
      </WeatherProvider>  
  );
}

export default App;
