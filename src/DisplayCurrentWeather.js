// DisplayWeather component

import { Outlet } from "react-router-dom";

const DisplayCurrentWeather = (props) => {
   console.log(props.weatherResult);
   return (
      <>
         <section>
            <h3>Current Forecast</h3>
         </section>
         <Outlet />
      </>
   )
}

export default DisplayCurrentWeather;