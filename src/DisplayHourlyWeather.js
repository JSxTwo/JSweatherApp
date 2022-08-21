// DisplayHourlyWeather component
import { useLocation } from 'react-router-dom';

const DisplayHourlyWeather = (props) => {
   const secondResult = useLocation();
   const secondWeatherResult = secondResult.state;
   console.log(secondWeatherResult);

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