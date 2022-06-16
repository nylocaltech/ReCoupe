import { Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CarsList from '../Components/CarsList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function CarsInfo() {

  const [carsCom, setCarsCom] = useState([]);
  const [autoTrader, setAutoTrader] = useState([]);
  const [trueCar, setTrueCar] = useState([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(2022);
  const [zip, setZip] = useState(10001);

  // Adding MUI Theme -- is this working?
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#1c7356',
        light: '#84c5ad',
        dark: '#0c3f2d',
      },
      secondary: {
        main: '#71C562',
      },
    },
    spacing: 8,
  });


  // React using hooks to live update the forms after every keypress / value change
  const updateMake = (e) => {
    setMake(e.target.value)
  }
  const updateYear = (e) => {
    setYear(e.target.value)
  }
  const updateModel = (e) => {
    setModel(e.target.value)
  }
  const updateZip = (e) => {
    setZip(e.target.value)
  }


  const fetching = () => {
    fetch(`/api/scrape/${make}/${model}/${year}/${zip}`)
      .then(response => response.json())
      .then(data => {
        setCarsCom(data.carsComData)
        setAutoTrader(data.autoTraderData)
        setTrueCar(data.trueCarData)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
     <Box id="search"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: 2
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={updateMake} color="primary" label="Make" variant="filled" />
      <TextField onChange={updateModel} id="outlined-filled" label="Model" variant="filled" />
      <TextField onChange={updateYear} id="outlined-filled" label="Minimum Year" variant="filled" />
      <TextField onChange={updateZip} id="outlined-filled" label="Zip" variant="filled" />
      <Button variant="contained" color="success" onClick={fetching}>Search</Button>
    </Box>
    
    <div style={{
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <CarsList carsArr={carsCom} name={'Cars.com'}/>
      <CarsList carsArr={autoTrader} name={'AutoTrader'}/>
      <CarsList carsArr={trueCar} name={'True Car'} />
    </div>
  </>
  )
}
