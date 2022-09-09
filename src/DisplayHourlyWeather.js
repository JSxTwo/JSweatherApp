// DisplayHourlyWeather component
// import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const DisplayHourlyWeather = (props) => {
   const [ secondWeatherResult, setSecondWeatherResult] = useState(null);

   // This will get the Hourly Weather data
   useEffect ( () => {
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
   }, [])

   return (
      <section>
            {
               secondWeatherResult !== null
               ?
               <>
                  <h3>Hourly Forecast</h3>
                  {
                     <table>
                        <tbody>
                           <tr>
                              <th>Every 3 Hours</th>
                              <th>Temperature</th> 
                           </tr>

                           {secondWeatherResult.list.slice(0,9).map((item) => {
                              return [
                                 <tr key={item.dt}>
                                    <td>
                                       {item.dt_txt}
                                    </td>
                                    <td>
                                       {item.main.temp} ℃
                                    </td>
                                    <td>
                                       {item.weather[0].main}
                                    </td>
                                    <td>
                                       {<img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].main} />}
                                    </td>
                                 </tr>
                              ]
                           })}
                        </tbody>
                     </table>
                  }
               </>
               : null
            }
      </section>
   )
}

export default DisplayHourlyWeather;