import {
  Button,
  FormGroup,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useState } from "react";
import DisplayFood from "../components/DisplayFood";
import NavTabs from "../components/NavBar";
import API from "../utils/API";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const filterChoice = [
  "No-Diet",
  "vegetarian",
  "vegan",
  "alcohol-free",
  "tree-nut-free",
  "peanut-free",
];

function SearchFoodPage() {
  const [filter, setFilter] = useState(filterChoice[0]);
  const [meals, setMeals] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSuccess = () => {
    setSuccessOpen(true);
  };

  const handleError = () => {
    setErrorOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessOpen(false);
    setErrorOpen(false);
  };

  // Used to console log the data coming back from the api whenever the data does end up coming back
  // useEffect(() => {
  //   console.log(meals);
  // }, [meals]);

  async function getFood(diet, food) {
    await API.getAPIFood(diet, food)
      .then((res) => {
        // Goes into the data and grabs the array of foods
        let foods = res.data.hits;
        setMeals(foods);
      })
      .catch((err) => console.log(err));
  }

  function getUserName() {
    let values = JSON.parse(localStorage.getItem("userInfo"));
    values = values._doc.username;

    return values;
  }

  function getUserId() {
    let userId = JSON.parse(localStorage.getItem("userInfo"));
    userId = userId._doc._id;

    return userId;
  }

  const user = getUserName();
  const userId = getUserId();

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Food Search 🍗
      </Typography>
      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your food was successfully saved
        </Alert>
      </Snackbar>

      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          We're sorry, Your food could not be saved
        </Alert>
      </Snackbar>

      <Grid
        container
        alignContent="center"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid
            container
            alignItems="center"
            justify="center"
            alignContent="center"
          >
            <FormGroup row={true}>
              <TextField
                id="food-filter"
                select
                label="Filter"
                value={filter}
                onChange={handleChange}
                helperText="Please select your filter"
                margin="dense"
              >
                {filterChoice.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-basic"
                label="Search Food Here"
                variant="outlined"
                margin="dense"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value.trim())}
                size="small"
                style={{ width: "45%" }}
              />
              <Button
                onClick={() => {
                  getFood(filter, inputValue);
                }}
              >
                Forage
              </Button>
            </FormGroup>
          </Grid>
        </Grid>
        {meals ? (
          meals.map((meal) => {
            return (
              <DisplayFood
                key={meals.indexOf(meal)}
                {...meal}
                userId={userId}
                handleSuccess={handleSuccess}
                handleError={handleError}
              />
            );
          })
        ) : (
          <h3>No foods to display</h3>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default SearchFoodPage;
