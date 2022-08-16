import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Form from './Form.js';
import DisplayCurrentWeather from './DisplayCurrentWeather';
import DisplayHourlyWeather from './DisplayHourlyWeather';
import Display10DaysWeather from './Display10DaysWeather';
import ErrorPage from './ErrorPage';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element= { <> <Header/> <Form/> <DisplayCurrentWeather/> </> }> </Route>

        <Route path="/hourly" element= { <> <Header/> <Form/> <DisplayCurrentWeather/> <DisplayHourlyWeather/> </> }> </Route>

        <Route path="/10days" element= { <> <Header/> <Form/> <DisplayCurrentWeather/> <Display10DaysWeather/> </> }> </Route>

        <Route path="/*" element= {<ErrorPage/>} />
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
  //Current day: https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=3d828a8d5ff245862af24fb2c5883de1&units=metric
  //4 days Hourly: https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
  //Daily 10 days: api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={10}&appid={API key}


// Components:
  // App.js --> take user city selection from Form.js and make axios call to API, pass props down to DisplayWeather
  // Header.js
  // Form.js --> get user city selection
  // DisplayCurrentWeather.js --> display weather data
  // DisplayHourlyWeather.js
  // Display10DaysWeather.js
  // Footer.js
  // ErrorPage.js


// Stretch Goals:
  // Routing - ajax call in App, pass down to Form, then pass back up to App then display
  // Firebase - user can save the city so they can easily click and access 
  // Wes Bos - search type ahead dropdown (https://courses.wesbos.com/account/access/62ed6baa88db94aff342d434/view/194130156) 
  // Able to change the language
