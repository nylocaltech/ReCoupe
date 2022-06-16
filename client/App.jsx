import React from 'react';
import MainContainer from './containers/MainContainer';
import TestComponent from './Components/testComponent';
import { Routes, Route } from 'react-router-dom';
import Trends from './containers/Trends';
import CarsInfo from './containers/CarsInfo';
import Login from './Components/Login';
import Hello from './Components/hello';

const App = () => (
    <div id='app'>
        <MainContainer />
        <Routes>
            <Route
                exact path="/"
                element={<CarsInfo />}
            />
            <Route
                exact path="/trends"
                element={<Trends />}
            />
            <Route
                exact path="/login"
                element={<Login />}
            />
            <Route
                exact path="/hello"
                element={<Hello />}
            />
        </Routes>
    </div>
);

export default App;