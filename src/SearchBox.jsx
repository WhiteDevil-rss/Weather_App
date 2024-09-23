import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from 'react';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "405ab9c7c7a5d163d07fb0ea85d3acff";

    let getWeatherInfo = async () =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city:jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                cloud: jsonResponse.clouds.all
            };
            // console.log(result);
            return result;
        }catch(err){
            throw err;
        }
    }

    let handelChange = (event) => {
        setCity(event.target.value);
    };
    
    let handelSubmit = async(event) =>{
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    };
    return (
        <div className='SearchBox'>
            <form action="#" onSubmit={handelSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="filled" required value={city} onChange={handelChange}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Send
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}