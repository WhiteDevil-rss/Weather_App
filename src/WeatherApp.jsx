import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState({
        city: "Surat",
        feelsLike: 32.54,
        humidity: 83,
        temp: 27.99,
        tempMax: 27.99,
        tempMin: 27.99,
        weather: "mist",
        cloud: 30
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div>
            <h2>Weather App by 
                <br />
                <h3>
                    <a href="https://github.com/WhiteDevil-rss">Rajput Shivam Singh</a>
                </h3>
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            <h5>Powered by &nbsp;&nbsp;&nbsp;
                <a href="https://openweathermap.org/api">
                    <img src="https://brands.home-assistant.io/_/openweathermap/logo.png" alt="" width={"50rem"}/>
                </a>
            </h5>
        </div>
    );
}