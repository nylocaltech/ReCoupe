import React, { Component } from 'react';
import QueryCreator from '../Components/QueryCreator';
import Box from '@mui/material/Box';

export default class Trends extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <QueryCreator />
            </Box>
            </>
        )
    }
}