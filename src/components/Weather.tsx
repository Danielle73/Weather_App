import React, {useState} from "react";
import axios from "axios";

const Weather = () => {

    const[city, setCity] = useState('');
    const[weatherData, setWeatherData] = useState('');

    const fetchWeatherData = async () =>{
        try{
            const response = await axios.get(
                
            )
        }
    }


    return ( 
        <>
        <p>Hi</p>
        </>
     );
}
 
export default Weather;