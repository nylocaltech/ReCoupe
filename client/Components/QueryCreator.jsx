import React, { useState, useEffect } from 'react';
import { Button, Checkbox, FormGroup, Slider } from '@mui/material';
import CarsList from '../Components/CarsList';
import Typography from '@mui/material/Typography';

export default function QueryCreator() {
  const [make, setMake] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1);
  const [data, setData] = useState(' ');
  const [preference, setPreference] = useState({vehicaltype: '', priority: ''});
  const [car, setCar] = useState([]);

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


  const advanceQuery = ((e, min, max) => {
    e.preventDefault();
    fetch(`/db/requestByRange/${min}/${max}/${make}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, '<-- data from advance query')
      //   for(let i = 0; i < data.length; i++){
      //     carObj.push(data[i]);
      //   }
      //   console.log(carObj)
      // })
      console.log(data.cars)
        setCar(data.cars);
      })
      .catch(err=>err);
    })

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
    console.log(e.target)

    console.log(min, max);
  }

  const handleRecommend = (e) => {
    document.querySelector('#recommendation_area').innerText = "Toyata Camry, Hyundai Sonata, Nissan Versa"
  }

  useEffect(() => {
    console.log(min, max);
  }, [min, max]);
  


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
      <>
      <div id='QueryBuilder'>
        <Typography variant='h4'>Car Recommender</Typography>
        <br/>
        <form> 
          <fieldset class='fieldset'>
           <legend>What's most important to you in a car?</legend>
            <label>
              <Typography variant='h8'>Fuel Efficiency</Typography>
              <input name="priority" type="checkbox" value="env" />
            </label>
            <label>
              <Typography variant='h8'>Cost</Typography>
              <input name="priority" type="checkbox" value="cost"/>
            </label>
            <label>
             <Typography variant='h8'>Safety</Typography>
              <input name="priority" type="checkbox" value="safety"/>
            </label>
            <label>
            <Typography variant='h8'>Style</Typography>
              <input name="priority" type="checkbox" value="luxury"/>
            </label>
          </fieldset>

          <fieldset class='fieldset'>
           <legend>What kind of car are you looking for?</legend>
            <label>
              <Typography variant='h8'>Sedan</Typography>
              <input name="priority" type="checkbox" value="sedan"/>
            </label>
            <label>
              <Typography variant='h8'>Van</Typography>
              <input name="priority" type="checkbox" value="van"/>
            </label>
            <label>
             <Typography variant='h8'>Truck</Typography>
              <input name="priority" type="checkbox" value="truck"/>
            </label>
            <label>
            <Typography variant='h8'>SUV</Typography>
              <input name="priority" type="checkbox" value="suv"/>
            </label>
            <label>
            <Typography variant='h8'>Luxury Coupe</Typography>
              <input name="priority" type="checkbox" value="coupe"/>
            </label>
          </fieldset>

          <br/>
          <Button style={{
        borderRadius: 5,
        backgroundColor: '#fafafa',
        color: '#000000',
        padding: "8px 6px",
        fontSize: "14px"
            }} variant="outlined" onClick={e => handleRecommend(e)}>Submit</Button>
        </form>

        <br/>
        <br/>

        <h3> Based on your preferences, we recommend...</h3>
        <h4 id="recommendation_area"></h4>
        {/* <Typography variant='h3' id="recommendation_area"></Typography> */}
          
        <hr/>
        <br/>
        <br/>

        <Typography variant='h4'> Custom Query Builder</Typography>
            <br />
        <fieldset class='fieldset'>
            <br />
            <legend>Search Used Cars By Brand</legend>  
        
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
          </fieldset>
        <form>

        <fieldset class='fieldset'>
            <br />
            <legend>Search Used Cars By Price Range</legend>  
      
          <div>
            {/* price range slider */}
         {/*  <div>
            <h3>Min: {min}</h3>
            <h3>Max: {max}</h3>
            <input id="priceSlider" type="range" min={min} max={max} oninput="amount.value=rangeInput.value" />
            <input id="amount" type="number" min={min} max={max}oninput="rangeInput.value=amount.value" />
          </div> */}
          </div>
        {/* </form>  */}
        <h3>Min: {min}</h3>
        <h3>Max: {max}</h3>
        {/* <h4> Search by Price Range </h4> */}
        <Slider
          className='carMinPrice'
          getAriaLabel={() => 'Price range'}
          min={min}
          max={max}
          //value={[min, max]}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <Slider
          className = 'carMaxPrice'
          getAriaLabel={() => 'Price range'}
          min={min}
          max={max}
          //value={[min, max]}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
        <button onClick={(e) => {
          // console.log(document.querySelectorAll('.MuiSlider-valueLabelLabel'))
          // console.log(document.querySelectorAll('.MuiSlider-valueLabelLabel').innerText)
          // let minAndMax = document.querySelectorAll('.MuiSlider-valueLabelLabel').innerText;
          // let min = minAndMax[0];
          // let max = minAndMax[1];
          // console.log(min, max);
          //advanceQuery(min, max);
          advanceQuery(e, 2000, 30000)
        }}>submit</button>

        <h4> Order by Mileage </h4>
        <h4> Order by Price </h4>
        <h5> Sources </h5>
          {/* </div> */}
      
       
        </fieldset>
        </form> 

          <hr/>
          

  <fieldset class='fieldset'>
            <legend>Check these listings:</legend>  
            <label>
              <Typography variant='h7'>AutoTrader</Typography>
              <input name="priority" type="checkbox" value="autotrader"/>
            </label>
            <label>
              <Typography variant='h7'>Car Gurus</Typography>
              <input name="priority" type="checkbox" value="cargurus"/>
            </label>
            <label>
              <Typography variant='h7'>Cars.com</Typography>
              <input name="priority" type="checkbox" value="carscom"/>
            </label>
            <label>
              <Typography variant='h7'>TrueCar.com</Typography>
              <input name="priority" type="checkbox" value="truecar"/>
            </label>
          </fieldset>

          <fieldset>
          <legend>Order By:</legend>  
          <label>
              <Typography variant='h7'>Order by Mileage</Typography>
              <input name="priority" type="radio" value="env"/>
            </label>
            <label>
              <Typography variant='h7'>OrderByPrice</Typography>
              <input name="priority" type="radio" value="cost"/>
            </label>
            </fieldset>

            <hr/>
            <br />

            <Typography variant='h4'>Display Results</Typography>

        <h4>Count of Results</h4>
        <h4>Average Price</h4>
        <h4>Line chart: mileage by price</h4>
        <h7>(highlights best deals)</h7>
        <h4>Histogram: types of cars</h4>


        <CarsList carsArr = {car} name={'True Car'}/>
      </div>
      </>
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