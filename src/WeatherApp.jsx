import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, { useState } from 'react';
import { Description } from "@mui/icons-material";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: "24.84",
        temp: "25.05",
        humidity: "60%",
        tempMin: "24.00",
        tempMax: "26.00",
        description: "Clouds",
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