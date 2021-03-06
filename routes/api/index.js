const router = require("express").Router();
const foodMealRoutes = require("./apifood");
const mealRoutes = require("./meals");
const userRoutes = require("./userDatabase");
const emailRouter = require("./emailRouter")
const passwordRouter = require("./passwordRouter")

// Meal routes
router.use("/meals", mealRoutes);

// Third-Party API Route
router.use("/getfoods", foodMealRoutes);

// User API route
router.use("/users", userRoutes);

router.use("/reset_password", emailRouter);

router.use("/password/reset", passwordRouter)

module.exports = router;
