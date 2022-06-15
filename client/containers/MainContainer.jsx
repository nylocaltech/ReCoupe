import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { Typography, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/Core';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import styles from '../styles.scss';
// import themeOptions from '../Components/ThemeOptions';

const MainContainer = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <CssBaseline />
        <AppBar position="relative" style={{ background: '#71C562' }}>
          <Toolbar> 
            <Typography variant='h6'>(Re)Cycle</Typography>
          </Toolbar>
        </AppBar>
        
        <main>
          <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Container maxWidth="false" id="homeBanner">
            <Typography variant="h2" align='center' gutterBottom style={{ color: "white" }}>
              (Re)Cycle
            </Typography>
            <Typography variant="h5" align='center' gutterBottom>
              Take a spin. Pass it on.
            </Typography>

            {/* <Tabs value={value} onChange={handleChange} centered>
              <Link to="/">
                <Tab label="Home Page" />
              </Link>
              <Link to={'/trends'}>
                <Tab label="Trends" />
              </Link>
            </Tabs> */}

            </Container>
          </Box>
        </main>
        </>
    );
}

export default MainContainer;