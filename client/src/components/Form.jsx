import React, { useState } from 'react'
import { Link, navigate } from '@reach/router'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
    makeStyles
} from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
    paper: {
        width: "60rem", padding: "1rem",
        margin: "auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%",
        display: 'block',
        
    },
    dropdown: {
        margin: "1rem"
    }
    // formControl: {
    //     minWidth: 120,
    // },
});

export default () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [ position, setPosition ] = useState("")
    const [ chests, setChests ] = useState();
    const [ catchphrase, setCatchphrase ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ pegLeg, setPegLeg ] = useState(false);
    const [ eyePatch, setEyePatch ] = useState(false);
    const [ hookHand, setHookHand ] = useState(false);


    const createPirate = (e) => {
        e.preventDefault();
        const myPirate = { name, position, chests, imageUrl, catchphrase, pegLeg, eyePatch, hookHand }
        axios.post('http://localhost:8000/api/pirates/new', myPirate)
            .then(res => {navigate("/pirates")})
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for(const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }    

    return (
        <Paper elevation={3} className={classes.paper}>
                
                <form onSubmit = { createPirate } >
                {
                    errors?
                        (errors.map((err, index) => <p key={index}>{err}</p>)):
                        ""
                }
                    <FormControl variant="outlined" className={classes.input}>
                        <InputLabel>Pirate Name</InputLabel>
                        <OutlinedInput type="text"
                                        name="name"
                                        value={name}
                                        onChange = { (e) => setName(e.target.value)}
                                        />
                    </FormControl>
                    <br />

                    <FormControl variant="outlined" className={classes.input}>
                        <InputLabel>Image URL</InputLabel>
                        <OutlinedInput type="text"
                                        name="imageUrl"
                                        value={imageUrl}
                                        onChange = {(e) => setImageUrl(e.target.value)}
                                        />
                    </FormControl>
                    <br />

                        <label>Number of Chests:</label>
                        <select className={classes.dropdown} name="chests" onSubmit={(e) => setChests(e.target.value)}>
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>

                    <br />

                    <FormControl variant="outlined" className={classes.input}>
                        <InputLabel>Pirate Catchphrase</InputLabel>
                        <OutlinedInput type="text"
                                        name="catchphrase"
                                        value={catchphrase}
                                        onChange = {(e) => setCatchphrase(e.target.value)}
                                        />
                    </FormControl>
                    <br />

                        <label>Crew Position:</label>
                        <select className={classes.dropdown} name="position" onSubmit={(e) => setPosition(e.target.value)}>
                            <option value={"Captain"}>Captain</option>
                            <option value={"First Mate"}>First Mate</option>
                            <option value={"Quarter Master"}>Quarter Master</option>
                            <option value={"Boatswain"}>Boatswain</option>
                            <option value={"Powder Monkey"}>Powder Monkey</option>
                        </select>

                    <br />

                    <label>Peg Leg</label>
                    <input 
                        type="checkbox" 
                        id="pegLeg"
                        name="pegLeg"
                        value="true"
                        checked={(e) => setPegLeg(true)}
                        />
                    <br />

                    <label>Eye Patch</label>
                    <input 
                        type="checkbox" 
                        name="eyePatch"
                        value={false}
                        checked={(e) => setEyePatch(true)}
                    />
                    <br />

                    <label>Hook Hand</label>
                    <input 
                        type="checkbox" 
                        name="hookHand"
                        value={false}
                        checked={(e) => setHookHand(true)}
                        />
                    <br />
                    <br />
                    
                    <Button type="submit" variant="contained" color="primary">
                        ADD PIRATE
                    </Button>

                </form>
            </Paper>

    )
}