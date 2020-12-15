import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MealImg from '../images/lily-banse--YHSwy6uqvk-unsplash.jpg';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: 690,
  },
  media: {
    height: 330,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <NavLink to="/mealPlan" style={{ textDecoration: 'none' }} className=
    {window.location.pathname === "/mealPlan"
      ? "nav-link active"
      : "nav-link"}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={MealImg}
          title="Meal Plan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Meal Plan
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This will take you to your current Meal Plan. Which is sorted into breakfast, lunch, dinner, and snack
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink>
  );
}