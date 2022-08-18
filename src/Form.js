// Form component
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DisplayCurrentWeather from './DisplayCurrentWeather';
import DisplayHourlyWeather from './DisplayHourlyWeather';
import Display10DaysWeather from './Display10DaysWeather';
import axios from 'axios';

const Form = () => {

   const [ cityChoice, setCityChoice ] = useState("");
   const [ weatherResult, setWeatherResult ] = useState({});

   const handleCityChange = (event) => {
      setCityChoice(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      
      axios({
         url: `https://api.openweathermap.org/data/2.5/weather/`,
         method: "GET",
         dataResponse: "json",
         params: {
            q: cityChoice,
            appid: "3d828a8d5ff245862af24fb2c5883de1",
            units: "metric",
         }
      }).then((res) => {
         setWeatherResult(res.data);
      });
      setCityChoice('');
   }

   return (
      <section>
         <h2>The forecast calls for...</h2>
            <form onSubmit = {handleSubmit}>
               <label htmlFor="city">Search by city:</label>
               <input 
                  placeholder="Toronto"
                  required
                  type="text" 
                  id="city" 
                  name="city" 
                  onChange = {handleCityChange} 
                  value = {cityChoice} 
               />
               <Link to="/"><button type="submit">Search</button></Link>
            </form>
         <Link to="/hourly"><button>Hourly Forecast</button></Link>
         <Link to ="/10days"><button>10 Day Forecast</button></Link>
         {/* <DisplayCurrentWeather weatherResult={weatherResult}/> */}
      </section>
   )
}

export default Form;