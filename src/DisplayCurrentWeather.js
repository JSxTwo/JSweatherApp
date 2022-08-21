// DisplayWeather component

import { Outlet } from "react-router-dom";

const DisplayCurrentWeather = (props) => {
   console.log(props.weatherResult);
   return (
      <>
         <section>
            <h3>Current Forecast</h3>
            {
               props.weatherResult !== null
               ?
               <>
                  <h4>{props.weatherResult.name}, {props.weatherResult.sys.country}</h4>
                  <p>{props.weatherResult.weather[0].description}</p>
                  <img src={`http://openweathermap.org/img/wn/${props.weatherResult.weather[0].icon}.png`} alt={props.weatherResult.weather[0].main} />
                  <p>Humidity: {props.weatherResult.main.humidity}</p>
                  <p>Current Temp: {props.weatherResult.main.temp} ℃</p>
                  <p>Highest Temp: {props.weatherResult.main.temp_max} ℃</p>
                  <p>Lowest Temp: {props.weatherResult.main.temp_min} ℃</p>
               </>
               : null
            }
         </section>
         <Outlet />
      </>
   )
}

export default DisplayCurrentWeather;