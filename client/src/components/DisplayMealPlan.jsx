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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: "5px",
    marginBottom: "5px",
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

export default function DisplayMealPlan({
  name,
  img,
  calories,
  servings,
  ingredients,
  type,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader title={name} />
        <CardMedia className={classes.media} image={img} title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            The Calories for {name} is : {Math.ceil(calories)}.
            <Divider />
            The Servings for {name} is : {servings}.
          </Typography>
        </CardContent>
        You foraged this as a : {type}
        <br />
        Ingredients:
        <CardActions disableSpacing>
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
            <Typography paragraph>
              <ul>
                {ingredients.map((ingredient) => (
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
