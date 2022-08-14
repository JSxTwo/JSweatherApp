// Form component
import { useState } from "react";


const Form = () => {

   const [ cityChoice, setCityChoice ] = useState("");

   const handleCityChange = (event) => {
      setCityChoice(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault();
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
         <button type="submit">Search</button>
         </form>
      </section>
   )
}

export default Form;