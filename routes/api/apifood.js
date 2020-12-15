const router = require("express").Router()
const apiController = require("../../controllers/apiController")

// Match with /api/getfoods/:diet/:food
router.route("/:diet/:food")
    .get(apiController.findAPIFood)

module.exports = router;