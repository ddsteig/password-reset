import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import HomeBackgroundImage from '../images/jakub-kapusnak-sDbj1dFlFPU-unsplash.jpg';
import LargeForageIcon from '../images/Orgtrans.png';
import {NavLink} from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';

const styles = (theme) => ({

  background: {
    backgroundImage: `url(${HomeBackgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  largeForageIcon: {
    height: '30%',
    width: '30%', 
    marginTop: '50px',
    marginBottom: 'auto',
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <Grid
    container
    direction="column"
    justify="center" 
    >
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={HomeBackgroundImage} alt="increase priority" />
      <Grid item xl={10} lg={8} md={8} sm={12} xs={12} align="center">
      <img className={classes.largeForageIcon} src={LargeForageIcon} alt="increase priority" />
      </Grid>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        A Social Meal Planning Ecosystem
      </Typography>
      <NavLink to="/signUpPage" className=
                {window.location.pathname === "/signUpPage"
                  ? "nav-link active"
                  : "nav-link"}>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
      >
        Sign Up
      </Button>
      </NavLink>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Upgrade your lifestyle.. its free!
      </Typography>
    </ProductHeroLayout>
    </Grid>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);