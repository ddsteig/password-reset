const router = require("express").Router();

const { authPerson } = require("../controllers/authController");

/* 
This route is when a user is trying to log in it will check the database for a user based on the email as 
shown in the controller -> authPerson -> getPersonByEmail function
*/
router.post("/", authPerson);

module.exports = router;
