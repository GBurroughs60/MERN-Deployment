import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

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
    const [name, setName] = useState("");
    const [ position, setPosition ] = useState("")
    const [ chests, setChests ] = useState();
    const [ catchphrase, setCatchphrase ] = useState("");
    const [ imageUrl, setImageUrl ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ pegLeg, setPegLeg ] = useState(false);
    const [ eyePatch, setEyePatch ] = useState(false);
    const [ hookHand, setHookHand ] = useState(false);
    const classes = useStyles();
    const [ nameError, setNameError ] = useState("");
    const [ imageError, setImageError ] = useState("");
    const [ catchPhraseError, setCatchphraseError ] = useState("");

    const handleName = e => {
        setName(e.target.value);
        if(e.target.value.length < 1) {
            setNameError("Name is required")
        }else if(e.target.value.length < 3){
            setNameError("Name must be at least 3 characters")
        } else if(e.target.value.length > 2) {
            setNameError("");
        }
    }

    const handleImage = e => {
        setImageUrl(e.target.value);
        if(e.target.value.length < 1) {
            setImageError("URL is required")
        }else if(e.target.value.length < 6){
            setImageError("Image URL must be at least 6 characters")
        } else if(e.target.value.length > 5) {
            setImageError("");
        }
    }

    const handleCatchPhrase = e => {
        setCatchphrase(e.target.value);
        if(e.target.value.length < 1) {
            setCatchphraseError("Catchphrase is required")
        }else if(e.target.value.length < 3){
            setCatchphraseError("Catchphrase must be at least 3 characters")
        } else if(e.target.value.length > 2) {
            setCatchphraseError("");
        }
    }

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

    return( 


<form onSubmit = { createPirate } >
                {
                    errors?
                        (errors.map((err, index) => <p key={index}>{err}</p>)):
                        ""
                }
                { nameError? <p>{nameError}</p>: ""}
                <label>Pirate Name: </label>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    onChange = { handleName }
                    />
                    <br/>

                    { imageError? <p>{imageError}</p>: ""}
                <label>Image URL: </label>
                <input 
                    type="text" 
                    name="imageUrl" 
                    value={imageUrl}
                    onChange = { handleImage }
                    />
                    <br/>


                {/* <label>Number of Chests:</label>
                        <input className={classes.dropdown} 
                            type="number"
                            name="chests" 
                            onChange={(e) => setChests(e.target.value)}>    
                        </input>
                <br /> */}

                <label>Number of Chests:</label>
                    <select
                        name="chests"
                        onChange={(e) => setChests(e.target.value)}
                        >
                        <option selected="true" disabled="disabled">Choose A Position</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                <br/>

                { catchPhraseError? <p>{catchPhraseError}</p>: ""}
                <label>Pirate Catchphrase: </label>
                <input 
                    type="text" 
                    name="catchphrase" 
                    value={catchphrase}
                    onChange = { handleCatchPhrase }
                    />
                    <br/>

                <label>Crew Position:</label>
                <select 
                    name="position" 
                    onChange={(e) => setPosition(e.target.value)}>
                        <option selected="true" disabled="disabled">Choose A Position</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                </select>

                <br />

                <label>Peg Leg</label>
                <input 
                type="checkbox" 
                id="pegLeg"
                name="pegLeg"
                value="true"
                onClick={(e)=>setPegLeg(true)}
                />
                <br />

                <label>Eye Patch</label>
                <input 
                type="checkbox" 
                name="eyePatch"
                value={true}
                onClick={(e) => setEyePatch(true)}
                />
                <br />

                <label>Hook Hand</label>
                <input 
                type="checkbox" 
                name="hookHand"
                onClick={(e) => setHookHand(true)}
                
                />
                <br />
                <br />
            <input type="submit" />
        </form>
    )
}