import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import web from "./images/card1.png"
import my_work from "./My_work"

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
        maxWidth: 345,
      },
      paper: {
        padding: theme.spacing(1),
        backgroundColor: 'white',
        textAlign:'center'
      },
    media: {
      height: 550
    },
  }));

function Work() {
    const classes = useStyles();
    const Work=my_work.map((work)=>{ 
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={work.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {work.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card> })
      console.log(Work)
    return (
        <div>
        {Work}
        </div>
    )
}

export default Work
