const router = require("express").Router();
const foodMealRoutes = require("./apifood");
const mealRoutes = require("./meals");
const userRoutes = require("./userDatabase");

// Meal routes
router.use("/meals", mealRoutes);

// Third-Party API Route
router.use("/getfoods", foodMealRoutes);

// User API route
router.use("/users", userRoutes);

module.exports = router;
