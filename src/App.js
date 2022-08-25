import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Form from './Form.js';
import DisplayCurrentWeather from './DisplayCurrentWeather';
import DisplayHourlyWeather from './DisplayHourlyWeather';
import Display5DaysWeather from './Display5DaysWeather';
import ErrorPage from './ErrorPage';
import Footer from './Footer.js';
import axios from 'axios';

function App() {

  const [ cityChoice, setCityChoice ] = useState("");
  const [ weatherResult, setWeatherResult ] = useState(null);


  const handleCityChange = (event) => {
    setCityChoice(event.target.value);
  }

  // This will get the Current Weather data
  const handleSubmit = (event, cityChoice) => {
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
      }).catch((error) => {
        alert('No location found 🌎 Please try again');
      });
      // setCityChoice('');
  }


  return (
    <div className="App">
      <Header />
      <Form handleCityChange={handleCityChange} handleSubmit={handleSubmit} cityChoice={cityChoice} weatherResult={weatherResult} />
      <Routes>
        <Route path='/' element={<DisplayCurrentWeather weatherResult={weatherResult} cityChoice={cityChoice} />}>
          <Route path='/hourly' element={<DisplayHourlyWeather />}></Route>
          <Route path='/5days' element={<Display5DaysWeather />}></Route>
        </Route>
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


// Pseudo Code:
  // 1. User types a city in the input field 
  // 2. Once they click 'submit' the Current Day forecast will appear. User has the option to click Hourly forecast and 10 Day forecast.

//ENDPOINTS:
  //Current day: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=3d828a8d5ff245862af24fb2c5883de1&units=metric
  //4 days Hourly: https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
  //Daily 10 days: api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={10}&appid={API key}

  //5 Day/3 Hours: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


// Components:
  // App.js --> take user city selection from Form.js and make axios call to API, pass props down to DisplayWeather
  // Header.js
  // Form.js --> get user city selection
  // DisplayCurrentWeather.js --> display weather data
  // DisplayHourlyWeather.js
  // Display5DaysWeather.js
  // Footer.js
  // ErrorPage.js


// Stretch Goals:
  // Firebase - user can save the city so they can easily click and access 
  // Wes Bos - search type ahead dropdown (https://courses.wesbos.com/account/access/62ed6baa88db94aff342d434/view/194130156) 
  // Able to change the language