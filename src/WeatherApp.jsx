import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: "24.84°C",
        temp: "25.05°C",
        humidity: "60%",
        tempMin: "24.00°C",
        tempMax: "26.00°C",
        weather: "Clouds",
    });

    let updateWeatherInfo = (newInfo) => { setWeatherInfo(newInfo); };

  return (
    <div style={{ textAlign: 'center'}}>
        <h2 style={{ color: 'white' }}>Today's Forecast</h2>
        <SearchBox updateInfo={updateWeatherInfo}/>
        <InfoBox info={weatherInfo} />
    </div>
  );
}