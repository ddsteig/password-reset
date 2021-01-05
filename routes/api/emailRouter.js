const router = require("express").Router()
const emailController = require("../../controllers/emailController");
const userController = require("../../controllers/userController");

router.route("/user/:email").post(emailController.sendPasswordResetEmail)

module.exports = router;