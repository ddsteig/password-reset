import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "../components/AppBar";
import Toolbar, { styles as toolbarStyles } from "../components/Toolbar";
import MiniForageImage from "../images/Forage.png";

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.black,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.black,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.black,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
    whiteSpace: "nowrap",
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  miniForage: {
    marginRight: theme.spacing(2),
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Box display="flex" flexGrow={500}>
            <img
              className={classes.miniForage}
              src={MiniForageImage}
              alt="Forage icon"
            />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              {"Forage"}
            </Link>
          </Box>

          <div className={classes.right}>
            <NavLink
              to="/loginPage"
              className={
                window.location.pathname === "/loginPage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
              >
                {"Login"}
              </Link>
            </NavLink>
            <NavLink
              to="/signUpPage"
              className={
                window.location.pathname === "/signUpPage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <Link
                variant="h6"
                underline="none"
                className={clsx(classes.rightLink, classes.linkSecondary)}
              >
                {"Sign Up"}
              </Link>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
