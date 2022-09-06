// Form component
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DisplayCurrentWeather from './DisplayCurrentWeather';
import DisplayHourlyWeather from './DisplayHourlyWeather';
import Display10DaysWeather from './Display10DaysWeather';
import axios from 'axios';

const Form = (props) => {

   const [anotherWeatherResult, setAnotherWeatherResult] = useState(null);
   // const [ cityChoice, setCityChoice ] = useState("");
   // const [ weatherResult, setWeatherResult ] = useState({});

   // const handleCityChange = (event) => {
   //    setCityChoice(event.target.value);
   // }

   // const handleSubmit = (event) => {
   //    event.preventDefault();
      
   //    axios({
   //       url: `https://api.openweathermap.org/data/2.5/weather/`,
   //       method: "GET",
   //       dataResponse: "json",
   //       params: {
   //          q: cityChoice,
   //          appid: "3d828a8d5ff245862af24fb2c5883de1",
   //          units: "metric",
   //       }
   //    }).then((res) => {
   //       setWeatherResult(res.data);
   //    });
   //    setCityChoice('');
   // }

   const handleClick = (event) => {
      console.log(event.target.value);
      if (event.target.value == 'Hourly') {
         axios({
            url: `https://api.openweathermap.org/data/2.5/weather/`,
            method: 'GET',
            dataResponse: 'json',
            params: {
               q: 'New York',
               appid: "3d828a8d5ff245862af24fb2c5883de1",
               units: 'metric',
            }
         }).then((res) => {
            setAnotherWeatherResult(res.data);
         });
      } else if (event.target.value == '10Days') {
         axios({
            url: `https://api.openweathermap.org/data/2.5/forecast/`,
            method: 'GET',
            dataResponse: 'json',
            params: {
               q: "Scarborough",
               appid: "3d828a8d5ff245862af24fb2c5883de1",
               cnt: 10,
               units: 'metric',
            }
         }).then((res) => {
            setAnotherWeatherResult(res.data);
         });
      }
   }
   console.log(anotherWeatherResult);
   return (
      <section>
         <h2>The forecast calls for...</h2>
            <form action="submit" onSubmit = {event => props.handleSubmit(event, props.cityChoice)}>
               <label htmlFor="city">Search by city:</label>
               <input 
                  placeholder="Toronto"
                  required
                  type="text" 
                  id="city" 
                  name="city" 
                  onChange = {event => props.handleCityChange(event)} 
                  value = {props.cityChoice} 
               />
               <button type="submit">Search</button>
            </form>
         <Link to="/hourly"><button onClick={handleClick} value='Hourly'>Hourly Forecast</button></Link>
         <Link to ="/10days"><button onClick={handleClick} value='10Days'>10 Day Forecast</button></Link>
         {/* <DisplayCurrentWeather weatherResult={weatherResult}/> */}
      </section>
   )
}

export default Form;