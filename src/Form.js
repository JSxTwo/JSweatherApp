// Form component

const Form = (props) => {

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
      </section>
   )
}

export default Form;