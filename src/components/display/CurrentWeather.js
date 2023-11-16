import './CurrentWeather.scss'

import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import windDirection from "../../utilities/WindDirection";
import weatherType from "../../utilities/WeatherType";
import isDaytime from "../../utilities/IsDaytime";
import axios from 'axios'

const CurrentWeather = ({ loc }) => {

    const [weatherData, setWeatherData] = useState(null)

    const navigate = useNavigate();

    const loadData = async () => {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current_weather=true&timezone=auto&daily=sunrise,sunset`);
        setWeatherData({
            temperature: response.data.current_weather.temperature,
            windspeed: response.data.current_weather.windspeed,
            winddirection: response.data.current_weather.winddirection,
            weathercode: response.data.current_weather.weathercode,
            time: response.data.current_weather.time,
            sunrise: response.data.daily.sunrise[0],
            sunset: response.data.daily.sunset[0],
            daytime: isDaytime(response.data.current_weather.time, response.data.daily.sunrise[0], response.data.daily.sunset[0]),
            windDirectionText: windDirection(response.data.current_weather.winddirection),
            type: weatherType(response.data.current_weather.weathercode, isDaytime(response.data.current_weather.time, response.data.daily.sunrise[0], response.data.daily.sunset[0]))
    
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
        {weatherData && <div className="currentweather" onClick={() => navigate(`/location/${loc.locName}`)}>
            <div className='currentweather_title'>{loc.locName}</div>
            <div className="currentweather_main">
                <div className="currentweather_main_temp">{weatherData.temperature}°C</div>
                <div className="currentweather_main_weather">
                    <div>{weatherData.type.type.name}</div>
                    {/* <div>Thunderstorm with slight hail</div> */}
                    <img src={require(`../../img/weatherIcons/${weatherData.type.type.img}`)} alt={weatherData.type.type.img}></img>  
                </div>
            </div>
            <div className='currentweather_wind'>
                <img src={require("../../img/weatherIcons/air.png")} alt="wind" />
                {weatherData.windspeed}km/h, {weatherData.windDirectionText}
            </div>
            <div className="currentweather_update">Updated at {weatherData.time.slice(-5)} local time.</div>
        </div>}
        </>
    )
}
export default CurrentWeather;