import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormGroup, Slider } from '@mui/material';
import CarsList from '../Components/CarsList';


export default function QueryCreator() {
  const [make, setMake] = useState('');
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [data, setData] = useState(' ');

  // const setBody = (make) => {
  //   const body = {
  //     make,
  //   }
  //   fetch('/db/requestByMake', {
  //     method: 'POST',
  //     header: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body)
  //   })
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log(data, '<-- data from selected car');
  //     console.log(data[0]);
  //     setData(data);
  //     setMin(data[0].price);
  //     setMax(data[data.length-1].price);
  //   })
  // }


  useEffect(() => {
    console.log('component did mount');
    // send fetch request to get all cars
    fetch('/db/', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, '<-- data from get all cars');
        console.log(data[0]);
        setData(data);
        setMin(data[0].price);
        setMax(data[data.length - 1].price);
      })
      .catch(err => console.log(err));
  }, [])

  useEffect(() => {
    console.log(make);
    // fetch('/db/requestByMake', {
      fetch(`/db/requestByMake/${make}`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
      // body: {
      //   "make": "Honda"
      // }
    })
    .then(data => data.json())
    .then(data => {
      console.log(data, '<-- data from selected car');
      console.log(data[0]);
      setData(data.cars);
      setMin(data.cars[0].price);
      setMax(data.cars[data.cars.length-1].price);
    })
  }, [make]);

  const handleChange = (e) => {
    setMin(e.target.value[0]);
    setMax(e.target.value[1]);
    console.log(min, max);
  }
  

  /* fetch('/api/character', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then((data) => {
          console.log(data);
        }) */

  
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

        <h4> Search by Brands </h4>
        <form>
          <select value={ make } onChange={(e) => { setMake(e.target.value)}}>
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
            <h3>Min: {min}</h3>
            <h3>Max: {max}</h3>
            <input id="priceSlider" type="range" min={min} max={max} oninput="amount.value=rangeInput.value" />
            <input id="amount" type="number" min={min} max={max}oninput="rangeInput.value=amount.value" />
          </div>
        </form> 

        <h4> Search by Price Range </h4>
        <Slider
          getAriaLabel={() => 'Price range'}
          value={[min, max]}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />

        
        <h4> Order by Mileage </h4>
        <h4> Order by Price </h4>
        <h5> Sources </h5>


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