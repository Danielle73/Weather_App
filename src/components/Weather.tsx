import { useState } from "react";
import axios from "axios";

interface WeatherData {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
  }
  

const API_URL = import.meta.env.VITE_WEATHER_URL;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if(!city) return;

  try {
    const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

    setWeather(response.data);
    setError(null)
  } catch (err){
    setError('City not found');
    setWeather(null);
  }

}

  return(
    <>
    <div className="container">
      <div className="weather_container">
        <h1>Weather forecast</h1>
        <p>Get today's weather of any city</p>
        <input 
        type="text" 
        placeholder="Enter City"
        value={city}
        onChange={ (e) => setCity(e.target.value)}/>
    </div>
    </div>

    <button onClick={fetchWeather}>Get Weather</button>

    {error && <p>{error}</p>}
  
  {weather && (
    <div className="weather_info">
        <h2>{weather.name}</h2>
        <p>{weather.weather[0].description}</p>
        <p>Temp: {weather.main.temp}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
    </div>
    )}

    </>
  )

};

export default Weather;
