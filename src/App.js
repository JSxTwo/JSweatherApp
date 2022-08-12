import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;


// Pseudo Code

// 1. User can type in a city in the input field 
// 2. Once they click 'submit' the weather data will appear on the page

//ENDPOINTS:
  //Current day: https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=3d828a8d5ff245862af24fb2c5883de1&units=metric
  //4 days: https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}
  //16 days: api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}


// Components:
  // App.js --> display Form
  // Form.js --> where we make ajax call pass props down to DisplayWeather
  // DisplayWeather.js --> display data


// Stretch Goals:
  // Routing - ajax call in App, pass down to Form, then pass back up to App then display
  // Firebase - user can save the city so they can easily click and access 
  // Wes Bos - search type ahead dropdown (https://courses.wesbos.com/account/access/62ed6baa88db94aff342d434/view/194130156) 
  // Able to change the language
