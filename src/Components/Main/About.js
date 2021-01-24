import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import web from "../Main/images/profile.png"


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      backgroundColor: '#364150',
      textAlign:'center'
    },
    large: {
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
    grid:{
      textAlign:'center'
    }
  }));

function About() {
    const classes = useStyles();
    return (
        <div>
        <Grid container className={classes.paper} alignItems="center" textAlign="center">
        <Grid item spacing={3} xs={12} lg={12} className={classes.paper}>
        Being a self taught developer, I have an immense desire to find solution to the problems. I might not know the solution to a problem but I have this skill to think which is required to find the solution. I also like to work on the automation because I believe that there is always a certain amount of redundant work that could be automated and in order to optimise the process I have created my own open source library which is published on cocoapods. 
        </Grid>
        </Grid>
        </div>
    )
}

export default About
