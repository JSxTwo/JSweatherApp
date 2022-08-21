// DisplayCurrentWeather component

import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const DisplayCurrentWeather = (props) => {

   const [ secondWeatherResult, setSecondWeatherResult] = useState(null);
   // console.log(props.weatherResult);


   // This will get the Hourly and 5 Day Weather data
   const hourlyButtonClicked = () => {
      axios({
         url: `https://api.openweathermap.org/data/2.5/forecast/`,
         method: "GET",
         dataResponse: "json",
         params: {
            q: props.cityChoice,
            appid: "3d828a8d5ff245862af24fb2c5883de1",
            units: "metric",
         }
         }).then((res) => {
            // console.log(res.data);
            setSecondWeatherResult(res.data);
         }).catch((error) => {
         alert('Sorry there seems to be a problem!');
      })
   }

   return (
      <>
         <section>
            {
               props.weatherResult !== null
               ?
               <>
                  <h3>Current Forecast</h3>
                  <h4>{props.weatherResult.name}, {props.weatherResult.sys.country}</h4>
                  <p>{props.weatherResult.weather[0].description}</p>
                  <img src={`http://openweathermap.org/img/wn/${props.weatherResult.weather[0].icon}.png`} alt={props.weatherResult.weather[0].main} />
                  <p>Current Temp: {props.weatherResult.main.temp} ℃</p>
                  <p>Feels Like: {props.weatherResult.main.feels_like} ℃</p>
                  <p>Highest Temp: {props.weatherResult.main.temp_max} ℃</p>
                  <p>Lowest Temp: {props.weatherResult.main.temp_min} ℃</p>
                  <p>Humidity: {props.weatherResult.main.humidity}%</p>

               <h4>Click for more weather information:</h4>
                  <Link to="/hourly" state={secondWeatherResult}><button onClick={hourlyButtonClicked}>Hourly Forecast</button> </Link>
                  <Link to ="/5days" state={secondWeatherResult}><button onClick={hourlyButtonClicked}>5 Day Forecast</button></Link>
               </>
               : null
            }
         <Outlet />
         </section>
      </>
   )
}

export default DisplayCurrentWeather;