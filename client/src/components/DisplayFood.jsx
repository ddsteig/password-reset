import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import React from "react";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function DisplayFood({ recipe, userId, handleSuccess, handleError, pageSent }) {
  const {
    label: foodName,
    image,
    ingredientLines,
    calories,
    yield: servings,
  } = recipe;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  async function handleSaveFood(category) {
    let foodData = {
      type: category,
      name: foodName,
      img: image,
      ingredients: ingredientLines,
      servings: servings,
      calories: Math.ceil(calories),
      user: userId,
    };
    // async function to call the create method to save to the specific meal. Give it the meals info and the specific category.
    await API.saveFood(foodData)
      .then((res) => {
        // return with a promise of res or err
        // if res then have a snackbar show up for success
        handleSuccess();
      })
      .catch((err) => {
        // else err with have err snack bar with the error message on there
        console.log("failed to save to database", err);
        handleError();
      });
  }

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader title={foodName} />
        <CardMedia className={classes.media} image={image} title={foodName} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The Calories for {foodName} is : {Math.ceil(calories)}.
            <Divider />
            The Servings for {foodName} is : {servings}.
          </Typography>
        </CardContent>
        Click to save to a category:
        <CardActions disableSpacing>
          <Fab
            style={{ fontSize: "20px", margin: "2px" }}
            color="primary"
            aria-label="breakfast"
            onClick={() => handleSaveFood("breakfast")}
          >
            B
          </Fab>
          <Fab
            style={{ fontSize: "20px", margin: "2px" }}
            color="primary"
            aria-label="lunch"
            onClick={() => handleSaveFood("lunch")}
          >
            L
          </Fab>
          <Fab
            style={{ fontSize: "20px", margin: "2px" }}
            color="primary"
            aria-label="dinner"
            onClick={() => handleSaveFood("dinner")}
          >
            D
          </Fab>
          <Fab
            style={{ fontSize: "20px", margin: "2px" }}
            color="primary"
            aria-label="snack"
            onClick={() => handleSaveFood("snack")}
          >
            S
          </Fab>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Ingredients:</Typography>
            <Typography paragraph>
              <ul>
                {ingredientLines.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}

export default DisplayFood;
