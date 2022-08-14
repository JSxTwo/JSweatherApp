import './App.css';
import Header from './Header';
import Form from './Form.js';
import Footer from './Footer.js';
import DisplayWeather from './DisplayWeather';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <DisplayWeather />
      <Footer />
    </div>
  );
}

export default App;


// Pseudo Code:
  // 1. User types a city in the input field 
  // 2. Once they click 'submit' the Current Day forecast, Hourly forecast and 10 Day forecast data will appear on the page

//ENDPOINTS:
  //Current day: https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=3d828a8d5ff245862af24fb2c5883de1&units=metric
  //4 days Hourly: https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
  //Daily 16 days: api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={10}&appid={API key}


// Components:
  // App.js --> where we take user city selection and make axios call to API, pass props down to DisplayWeather
  // Form.js --> get user city selection
  // DisplayWeather.js --> display weather data


// Stretch Goals:
  // Routing - ajax call in App, pass down to Form, then pass back up to App then display
  // Firebase - user can save the city so they can easily click and access 
  // Wes Bos - search type ahead dropdown (https://courses.wesbos.com/account/access/62ed6baa88db94aff342d434/view/194130156) 
  // Able to change the language
