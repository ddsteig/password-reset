import { Button, Grid, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMealPlan from "../components/DisplayMealPlan";
import NavTabs from "../components/NavBar";
import API from "../utils/API";

function MealPlanPage() {
  const [foodData, setFoodData] = useState([]);

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

  async function getMeals() {
    await axios
      .get("/api/meals/" + userId)
      .then((response) => {
        const data = response.data;
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }

  async function getMealsByType(userId, type) {
    await API.getMealByType(userId, type)
      .then((res) => {
        const data = res.data;
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getMeals();
  }, []);

  useEffect(() => {
    console.log(foodData);
  }, [foodData]);

  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Box m={6}>
        <Typography variant="h2" style={{ textAlign: "center" }}>
          Your Meal Plan 🗓
      </Typography>
      </Box>
      <Grid
        container
        alignContent="center"
        justify="space-around"
        style={{ textAlign: "center" }}
      >
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Button
            onClick={() => {
              getMeals();
            }}
            style={{ backgroundColor: "#D3D3D3", margin: "3px" }}
          >
            View All
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <Button
            onClick={() => {
              getMealsByType(userId, "breakfast");
            }}
            style={{ backgroundColor: "#D3D3D3", margin: "3px" }}
          >
            Breakfast
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={3}>
          <Button
            onClick={() => {
              getMealsByType(userId, "lunch");
            }}
            style={{ backgroundColor: "#D3D3D3", margin: "3px" }}
          >
            Lunch
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <Button
            onClick={() => {
              getMealsByType(userId, "dinner");
            }}
            style={{ backgroundColor: "#D3D3D3", margin: "3px" }}
          >
            Dinner
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={2} lg={2}>
          <Button
            onClick={() => {
              getMealsByType(userId, "snack");
            }}
            style={{ backgroundColor: "#D3D3D3", margin: "3px" }}
          >
            Snack
          </Button>
        </Grid>
      </Grid>
      <Box m={10}></Box>
      <Grid
        container
        alignContent="center"
        justify="space-around"
        style={{ textAlign: "center" }}
      >
        {foodData ? (
          foodData.map((food) => {
            return <DisplayMealPlan key={foodData.indexOf(food)} {...food} />;
          })
        ) : (
            <h3>
              No foods to display, Go check out the food search to forage for
              some.
            </h3>
          )}
      </Grid>
    </React.Fragment>
  );
}

export default MealPlanPage;
