const router = require("express").Router();
const mealsController = require("../../controllers/mealController");

// Matches with "/api/meals"
router.route("/").get(mealsController.findAll).post(mealsController.create);

// /api/meals/:users_id
router.route("/:user_id").get(mealsController.findByUserId);

// /api/meals/:user_id/:type
router.route("/:user_id/:type").get(mealsController.findByType);

// Matches with "/api/meals/:id"
// router
//   .route("/:id")
//   .get(mealsController.findById)
//   .delete(mealsController.remove);

module.exports = router;
