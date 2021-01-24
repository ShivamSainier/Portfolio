import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import web from "../Main/images/profile.png"
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(20),
      textAlign:'center'
    
    },
    large: {
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
  }));

function Intro() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3} alignItems="center" textAlign="center">
        <Grid item xs={12} lg={6} className={classes.paper}>
        <Typography variant="h3" gutterBottom>
        Hi, I'am Rohit <br />iOS Developer
         </Typography>
         <Button variant="contained" color="primary">
           Contact
         </Button>
        </Grid>
        <Grid item xs={6} lg={6} className={classes.paper}>
        <Avatar alt="Remy Sharp" src={web} className={classes.large} />

        </Grid>

        </Grid>
            
        </div>
    )
}

export default Intro
