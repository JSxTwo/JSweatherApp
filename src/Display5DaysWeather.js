//Display5DaysWeather component
import { useLocation } from 'react-router-dom';


const Display5DaysWeather = (props) => {
   const secondResult = useLocation();
   const secondWeatherResult = secondResult.state;
   console.log(secondWeatherResult);

   return (
      <section>
            {
               secondWeatherResult !== null
               ?
               <>
                  <h3>5 Day Forecast</h3>
                  {
                     <table>
                        <tbody>
                           <tr>
                              <th>Next 5 Days</th>
                              <th>Temperature</th>
                           </tr>
                           {/* Only getting weather for the next 5 days at 12pm, which are at index: 4, 12, 20, 28, 36 */}
                           <tr>
                              <td>
                                 {secondWeatherResult.list[4].dt_txt}
                              </td>
                              <td>
                                 {secondWeatherResult.list[4].main.temp} ℃
                              </td>
                              <td>
                                 {<img src={`http://openweathermap.org/img/wn/${secondWeatherResult.list[4].weather[0].icon}.png`} alt={secondWeatherResult.list[0].weather[0].main} />}
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 {secondWeatherResult.list[12].dt_txt}
                              </td>
                              <td>
                                 {secondWeatherResult.list[12].main.temp} ℃
                              </td>
                              <td>
                                 {<img src={`http://openweathermap.org/img/wn/${secondWeatherResult.list[12].weather[0].icon}.png`} alt={secondWeatherResult.list[0].weather[0].main} />}
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 {secondWeatherResult.list[20].dt_txt}
                              </td>
                              <td>
                                 {secondWeatherResult.list[20].main.temp} ℃
                              </td>
                              <td>
                                 {<img src={`http://openweathermap.org/img/wn/${secondWeatherResult.list[20].weather[0].icon}.png`} alt={secondWeatherResult.list[0].weather[0].main} />}
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 {secondWeatherResult.list[28].dt_txt}
                              </td>
                              <td>
                                 {secondWeatherResult.list[28].main.temp} ℃
                              </td>
                              <td>
                                 {<img src={`http://openweathermap.org/img/wn/${secondWeatherResult.list[28].weather[0].icon}.png`} alt={secondWeatherResult.list[0].weather[0].main} />}
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 {secondWeatherResult.list[36].dt_txt}
                              </td>
                              <td>
                                 {secondWeatherResult.list[36].main.temp} ℃
                              </td>
                              <td>
                                 {<img src={`http://openweathermap.org/img/wn/${secondWeatherResult.list[36].weather[0].icon}.png`} alt={secondWeatherResult.list[0].weather[0].main} />}
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  }
               </>
               : null
            }
      </section>
   )
}

export default Display5DaysWeather;