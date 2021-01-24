import React from 'react'
import Skill from "./Myskills"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const sk=[1,2,3,4,5,6,7,7]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      backgroundColor: 'white',
      textAlign:'center'
    },
    large: {
        width: theme.spacing(50),
        height: theme.spacing(50),
      },
  }));

function Skills() {
    const classes = useStyles();
    const my_skills=Skill.map((skil)=>{return <Button variant="contained" color="primary">{skil}</Button>})
    console.log(my_skills)
    return (
        <div>
            <Grid container spacing={3} className={classes.paper}>
            <Grid item xs={12} >
            Professional Skills
            </Grid>
            <Grid item xs={12} spacing={6} className={classes.paper}>
            {my_skills}
            </Grid>
           

            </Grid>
        </div>
    )
}

export default Skills
