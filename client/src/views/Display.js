import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { navigate } from "@reach/router";
import {
    Paper,
    Card,
    Button,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    paper: {
        width: "50rem",
        padding: "1rem",
        margin: "auto",
        
    },
    card: {
        width: "40rem",
        padding: "3rem",
        margin: "auto"
    },
    pic: {
        width: "10rem"
    }
});

export default (props) => {
    const { id } = props;
    const [ pirate, setPirate ] = useState("")
    const classes = useStyles();

    axios.get('http://localhost:8000/api/pirates/' + id)
        .then(res => {
            console.log(res.data)
            setPirate(res.data)
        })
        .catch(err => console.log(err))

    return(
        <Card>  
            <div className="topBar">
                    <div>
                    <h1>{pirate.name}</h1>
                    <Button 
                        onClick={ () => navigate("/pirates")}
                        variant="contained" 
                        color="primary"
                        >
                        Crew Board</Button>

                    <Paper elevation={3} >
                        <div>
                            <img className={classes.pic} src={pirate.imageUrl} />
                            <h3>{pirate.catchphrase}</h3>
                        </div>
                        <div>
                            <h2>About: </h2>
                            <p>Position: {pirate.position}</p> 
                            <p>Treasures: {pirate.chests}</p>
                            <p>Peg Leg: {pirate.pegLeg}
                                { pirate.pegLeg? <p>Yes</p>: <p>No</p>}  
                            </p>
                            <p>Eye Patch: 
                                { pirate.eyePatch? <p>Yes</p>: <p>No</p>}
                            </p>
                            <p>Hook Hand: 
                                { pirate.hookHand? <p>Yes</p>: <p>No</p>}
                            </p>
                        </div>

                    </Paper> 
                    </div> 

            </div>
        </Card>
    )
}
