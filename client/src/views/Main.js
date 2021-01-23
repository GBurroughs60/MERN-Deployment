import React, {useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import {
    Paper,
    Card,
    Button,
    makeStyles
} from '@material-ui/core';

const styles = {
    paper: {
        width: "60rem",
        padding: "1rem",
        margin: "auto"
    },
    table: {
        minWidth: 650,
    },
}

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
    pics: {
        width: "10rem"
    }
});


export default () => {
    const classes = useStyles();
    const [ pirates, setPirates ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    })

    const removeFromDom = pirateId => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }

    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/pirates/' + pirateId)
            .then(res => {
                removeFromDom(pirateId)
            })
    }

    const sortedPirates = pirates.sort((a,b) => a.name.localeCompare(b.name));

    return (
        <Card>  
            <div className="topBar">
            <h1>Pirate Crew</h1>
            <Button 
                onClick={ () => navigate("/pirates/new")}
                variant="contained" 
                color="primary"
            >
                Add Pirate</Button>
            </div>
            <Paper elevation={3} >
            { loaded?
                <TableContainer component={Paper}>
                    <Table style={styles.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Pirate Selfie </TableCell>
                                <TableCell>Pirate Name </TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {sortedPirates.map((pirate) => (
                            <TableRow key={pirate.name}>
                                
                                <TableCell component="th" scope="row">
                                    <img className={classes.pics} src={pirate.imageUrl} />
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    {pirate.name}
                                </TableCell>

                                <TableCell component="th" scope="row">
                                    <Button onClick={(e) => {navigate(`/pirates/${pirate._id}`)}} variant="contained" color="primary"> View Pirate</Button>
                                    <Button onClick={(e) => {deletePirate(pirate._id)}} variant="contained" color="secondary"> Walk the Plank!</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>:
                ""
            }

            </Paper>

        </Card>
    )
}