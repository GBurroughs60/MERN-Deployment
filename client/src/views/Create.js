import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { navigate } from '@reach/router';

import {
    Paper,
    Card,
    Button,
    makeStyles
} from '@material-ui/core';
import Form from '../components/Form';
import OtherForm from '../components/OtherForm';

const useStyles = makeStyles({
    paper: {
        width: "60rem",
        padding: "1rem",
        margin: "auto",
        
    },
    card: {
        width: "60rem",
        padding: "3rem",
        margin: "auto"
    },
    button: {
        margin: "1rem"
    }
});


export default () => {
    const classes = useStyles();

    return (
        <Card>  
            <div className="topBar">
            <h1>Add Pirate</h1>
            <Button 
                className={classes.button}
                onClick={ () => navigate("/pirates")}
                variant="contained" 
                color="primary"
            >
                Crew Board</Button>
            </div>
            <Paper elevation={3} >
                <OtherForm />
            </Paper>
            

        </Card>
    )
}