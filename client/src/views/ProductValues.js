import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import Icon from '@material-ui/core/Icon';



const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Icon style={{ fontSize: 40, color: "red" }}>fastfood</Icon>
               
              
              <Typography variant="h5" className={classes.title} align="center">
                Quickly Build Meal Plans
              </Typography>
              <Typography variant="subtitle1" align="center">
                {'Utilize our state of the art web application to search for specific foods or meals in a flash.'}
                {'Build your own complete meal plans in minutes!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Icon style={{ fontSize: 40, color: "red" }}>peopleicon</Icon>
              <Typography variant="h5" className={classes.title} align="center">
                Socialize with Other Foragers
              </Typography>
              <Typography variant="subtitle1" align="center">
                {'Everything is better with others! '}
                {'Make use of our built in social network to share your meal plans with friends and see how they are using Forage to enhance their lives!'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <Icon style={{ fontSize: 40, color: "red" }}>keyboardicon</Icon>
              <Typography variant="h5" className={classes.title} align="center">
                Estimate Your Calorie Needs
              </Typography>
              <Typography variant="subtitle1"align="center">
                {'Knowing where to start with a diet or a meal plan is hard. Dont worry, we make it easy. '}
                {'Enter in your basic information for a quick estimate of your calorie needs based on your goal. You can use your calorie estimate to help guide the creation of your meal plans.'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);