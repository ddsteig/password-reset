import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KitchenIcon from "@material-ui/icons/Kitchen";
import React from "react";
import CalorieCalculatorCard from "../components/CalorieCalculatorCard";
import MealPlanCard from "../components/MealPlanCard";
import NavTabs from "../components/NavBar";
import SearchFoodCard from "../components/SearchFoodCard";

const useStyles = makeStyles({
  containerInfo: {
    paddingTop: "20px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBotton: "20px",
  },
  userCard: {
    margin: "5px",
    textAlign: "center",
    color: "white",
    borderRadius: "25%",
  },
});

function UserPage() {
  /*
    @ getUserName function
    @ returns : a string of the username (the username stored in userInfo
      from the authentication implemented)
  */
  function getUserName() {
    let values = JSON.parse(localStorage.getItem("userInfo"));
    values = values._doc.username;

    return values;
  }

  const user = getUserName();

  const classes = useStyles();
  return (
    <React.Fragment>
      <NavTabs user={user} />
      <Box m={6}>
      <Typography variant="h2" style={{ textAlign: "center" }}>
        Hello, {user}
      </Typography>
      </Box>
      <Grid
        container
        className={classes.containerInfo}
        justify="center"
        align="center"
      >
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.userCard}>
          <CalorieCalculatorCard></CalorieCalculatorCard>
          {/* <UsersCard user={user} /> */}
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.userCard}>
          <SearchFoodCard>
            <KitchenIcon style={{ fontSize: 75 }}></KitchenIcon>
            {/* <CardContent className={classes.userCard}>
            <KitchenIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              This is the <strong>Search Food</strong> Icon. In this page you
              can <em>Forage</em> for food by searching the food of choice in
              the search bar. Then you are able to either store the food in
              breakfast, lunch, dinner, or even snack.
            </Typography>
          </CardContent> */}
          </SearchFoodCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.userCard}>
          <MealPlanCard>
            {/* <CardContent className={classes.userCard}>
            <FavoriteBorderOutlinedIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              This is the <strong>Meal Plan</strong> Icon. On this page you can select a Meal type and display your saved meals and recipes.
            </Typography>
          </CardContent> */}
          </MealPlanCard>
        </Grid>
        {/* <Grid item xs={12} sm={4} md={4} lg={3}>
          <CardContent className={classes.userCard}>
            <AccountCircleOutlinedIcon style={{ fontSize: 75 }} />
            <br />
            <Typography>
              This is the <strong>User</strong> Icon. This is your personal user page where you will see your calorie needs, and other information.
            </Typography>
          </CardContent>
        </Grid> */}
        {/* - TODO : Have a card for calorie calc */}

        {/* - TODO : Have a chart for food that is being stored */}
        {/* <Grid item xs={4} >
                    <Chart />
                </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default UserPage;
