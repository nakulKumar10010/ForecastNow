import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import React, { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="95c45fd4b208fa4a75c23449e8999d8a";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                description: jsonResponse.weather[0].description,
            };
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (e) => {
        setCity(e.target.value);
        setError(false); // Reset error state on input change 
    }

    let handleSubmit = async (e) => {
        try{
            e.preventDefault();
            console.log("City searched:", city);
            let newInfo = await getWeatherInfo(); 
            updateInfo(newInfo); // Update the weather info in the parent component
            setError(false); // Reset error state on successful fetch
            setCity(""); // Clear the input after submission
        } catch (err) {
            setError(true);
        }
    }
    return (
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}
                InputProps={{
                    style: {
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    color: '#000',
                    borderRadius: 10,
                    fontSize: '16px',
                    },
                }}
                InputLabelProps={{
                    style: {
                    color: '#1e88e5', // 
                    }
                }}
                
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" >Search</Button>
                {error && <p style={{ color: 'red' }}>No such place exists!</p>}
            </form>
        </div>
    )
}