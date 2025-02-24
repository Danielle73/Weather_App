import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_WEATHER_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null)

  const fetchWeather = async () => {
    if(!city) return;

  try {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    setWeather(response.data);
    setError(null)
  } catch (err){
    setError('City not found');
    setWeather(null)
  }

}

  return(
    <>
    <div className="container">
        <h1>Weather App</h1>
        <input 
        type="text" 
        placeholder="Enter City"
        value={city}
        onChange={ (e) => setCity(e.target.value)}/>
    </div>

    <button onClick={fetchWeather}>Get Weather</button>

    {error && <p>{error}</p>}

    <div className="weather_info">
        <h2>{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p>Temp: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
    </div>

    </>
  )

};

export default Weather;
