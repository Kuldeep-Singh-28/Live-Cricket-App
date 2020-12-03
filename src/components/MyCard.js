import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { getMatchesDetails } from '../api/Api';
import vs from '../img/vs.png'

const MyCard = ({ match }) => {

    const [detail, setDetail] = useState([]);

    const [open, setOpen] = useState(false);

const handleClick = (id) =>{
        getMatchesDetails(id)
            .then((data) => {
            console.log(data);
            setDetail(data);
            handleOpen();
        })
        .catch(error => console.log("ERROR : ", error))
    }

const getMatchCart = () => {
        return (
            <Card style={{ marginTop: 20 }}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" >
                        <Grid item style={{marginLeft: 4, color: "red"}}>
                            <Typography varient="h5" style={{fontWeight: "bold"}}>{match["team-1"]}</Typography>
                        </Grid>
                        <Grid item style={{margin: 4}}>
                            <img
                                style={{ width: 90 }}
                                src={vs}
                                alt=""
                            />
                        </Grid>
                        <Grid item style={{marginRight: 4 }}>
                            <Typography varient="h4" style={{fontWeight: "bold", color: "red" }}>{match["team-2"]}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions >
                    <Grid container justify="center" spacing={3}>
                        <Grid item>
                            <Button 
                            onClick={() => {
                                handleClick(match.unique_id)
                            }} color="primary" variant="contained">Show Details
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button item color="primary" variant="contained">
                                Start Time {new Date(match.dateTimeGMT).toLocaleString()}
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

        );
    };

    const handleClose = () =>{
        setOpen(false)
    }
    const handleOpen = () =>{
        setOpen(true)
    }

    const getDialog = () =>(
        <Dialog open={open} onClose={handleClick}>
            <DialogTitle id="alert-dialog-title">
                {"Match Detail.."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>
                        Match <span style={{fontStyle: "italic", fontWeight: "bold"}}>{detail.matchStarted ? "Started" : "Still Not Started"}</span>
                    </Typography>
                    <Typography>
                        <span style={{fontStyle: "italic", fontWeight: "bold"}}>{detail.score}</span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color= "primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );

    return (
        <Fragment>
            {getMatchCart()}
            {getDialog()}
        </Fragment>
        );
}

export default MyCard; 