import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormGroup, Slider } from '@mui/material';
import CarsList from '../Components/CarsList';


export default function QueryCreator() {
  const [make, setMake] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [data, setData] = useState(' ');

  useEffect(() => {
    console.log('heeey')
    // send fetch request to get all cars

  }, [state])
  
    return (
      <div id='QueryBuilder'>

        <h3> What's most important to you in a car? </h3>
        <form> 
          <fieldset>
            <label>
              <p>Fuel Efficiency</p>
              <input name="priority" type="radio" value="env"/>
            </label>
            <label>
              <p>Cost</p>
              <input name="priority" type="radio" value="cost"/>
            </label>
            <label>
              <p>Safety</p>
              <input name="priority" type="radio" value="safety"/>
            </label>
            <label>
              <p>Style</p>
              <input name="priority" type="radio" value="luxury"/>
            </label>
          </fieldset>
        </form>

        <h3> What kind of car are you looking for? </h3>

        <form> 
          <fieldset>
            <label>
              <p>Sedan</p>
              <input name="vehicletype" type="radio" value="sedan"/>
            </label>
            <label>
              <p>Van</p>
              <input name="vehicletype" type="radio" value="van"/>
            </label>
            <label>
              <p>Truck</p>
              <input name="vehicletype" type="radio" value="truck"/>
            </label>
            <label>
              <p>SUV</p>
              <input name="vehicletype" type="radio" value="suv"/>
            </label>
            <label>
              <p>Luxury Coupe</p>
              <input name="vehicletype" type="radio" value="coupe"/>
            </label>
          </fieldset>
          <button> Submit </button>
        </form>

        <h3> We recommend ...</h3>

        <h4> Search by Make </h4>
        <form>
          <select value={ language } onChange={(e) => { setLanguage(e.target.value);}}>
                    <option value="Blank">Please select one</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Dodge">Dodge</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Lexus</option>
                    <option value="Maserati">Maserati</option>
                    <option value="Mercedes-Benz">Mercedes</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
          </select>
          <div>
            {/* price range slider */}
            <input id="priceSlider" type="range" min={this.state.min} max={this.state.max} oninput="amount.value=rangeInput.value" />
            <input id="amount" type="number" value="100" min="0" max="200" oninput="rangeInput.value=amount.value" />
          </div>
        </form> 

        <h4> Search by Price Range </h4>
        {/* <Slider
          getAriaLabel={() => 'Price range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        /> */}

        
        <h4> Order by Mileage </h4>
        <h4> Order by Price </h4>


        <h1> Display results: </h1>

        <h4>Count of Results</h4>
        <h4>Average Price</h4>
        <h4>Line chart: mileage by price</h4>
        <h7>(highlights best deals)</h7>
        <h4>Histogram: types of cars</h4>

      </div>
    );
  }
  



        // Select which values are important to you

        // Select price range

        // Select which dealers to look through

/*

COLUMNS:  Make, Model, Year, Zip 

I'm looking for a 

* Get by price range 
* Get by mileage
* Get by type of car
* Order ascending / descending (Year, Mileage, Price)
* Select which dealers to look through?

DISPLAY STATS in QUERY RESULTS:
* Average price, Median Price
* Number of results in results
* Average mileage
* Average year

* Most popular car brands in the area



*/