import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PineappleImg from '../images/pineapple-supply-co-VHpDp_GkGgc-unsplash (1).jpg'
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
    <NavLink to="/searchFood" style={{ textDecoration: 'none' }} className=
    {window.location.pathname === "/searchFood"
      ? "nav-link active"
      : "nav-link"}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={PineappleImg}
          title="Pineapple Computer"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Search
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This will take you to the food search tool that is used to build your meal plans and look up recipes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </NavLink>
  );
}
