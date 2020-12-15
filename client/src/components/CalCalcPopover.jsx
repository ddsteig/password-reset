import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import GenderSelect from "./GenderSelect";
import BiometricForms from "./BiometricForms";
import ActivitySelector from "./ActivitySelector";
import GoalButtons from "./GoalButtons";

const styles = (theme) => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class SimplePopover extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? "simple-popper" : null}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
        >
          Calculator
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            <div>
              <h4 class="black-text" align="center">
            Lets Get Started by Entering in the Following Information:
           
              </h4>
             <GenderSelect></GenderSelect>
             <br />
              <hr />
               <br />
             <BiometricForms></BiometricForms>
              <br />
              <hr />
              <br />
              <ActivitySelector></ActivitySelector>
             <br />
              <hr />
              <br />
              <GoalButtons></GoalButtons>
              <br />
              <hr />
              <br />
            
              <form>
              
                <div class="callout success">
              
                  <h4 class="black-text" align="center">
                    This is your calorie needs based on the goal you 
                    selected:
                  </h4>
                
                  <h3
                    class="black-text"
                    name="mifflin"
                    id="mifflin"
                    align="center"
                  >
                    =>
                  </h3>
                </div>
              </form>
            </div>
          </Typography>
        </Popover>
      </div>
    );
  }
}

SimplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopover);
