import React, { useState } from 'react';
import { Button } from '@mui/material';
import CarsList from '../Components/CarsList';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function QueryCreator() {
    const classes = useStyles();
    const [selected, setSelected] = useState([]);
    const isAllSelected =
      options.length > 0 && selected.length === options.length;
  
    const handleChange = (event) => {
      const value = event.target.value;
      if (value[value.length - 1] === "all") {
        setSelected(selected.length === options.length ? [] : options);
        return;
      }
      setSelected(value);
    };
  
    return (
      <div id='QueryBuilder'>

        {/* === FORM ===
        Select type of vehicle */}
        <h3> What type of vehicle are you interested in? </h3>

        <FormControl className={classes.formControl}>
            <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
            <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            >
            <MenuItem
                value="all"
                classes={{
                root: isAllSelected ? classes.selectedAll : ""
                }}
            >
                <ListItemIcon>
                <Checkbox
                    classes={{ indeterminate: classes.indeterminateColor }}
                    checked={isAllSelected}
                    indeterminate={
                      selected.length > 0 && selected.length < options.length
                    }
                />
                </ListItemIcon>
                <ListItemText
                classes={{ primary: classes.selectAllText }}
                primary="Select All"
                />
            </MenuItem>
            {let options = ['Sedan', 'Coupe']}
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                <ListItemIcon>
                    <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>

        {/* Select which values are important to you */}

        <h3> What's most important to you in a car? (Check all that apply) </h3>

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Energy Efficiency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={safety}
                    label="Safety"
                    onChange={handleChange}
                >
                    <MenuItem value={"Price"}>Cost Efficiency</MenuItem>
                    <MenuItem value={"Environment"}>Family Friendly</MenuItem>
                    <MenuItem value={"Environment"}>Luxury</MenuItem>
                    <MenuItem value={"Environment"}>Safety</MenuItem>
                </Select>
        </FormControl>

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