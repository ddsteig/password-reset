const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users/"
router.route("/").post(userController.createUser);
//   .get(userController.find)

// Matches with "/api/users/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .delete(userController.remove);

module.exports = router;
