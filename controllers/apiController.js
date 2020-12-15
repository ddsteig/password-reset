const axios = require("axios")

module.exports = {
    findAPIFood: function(req, res) {
        let food = req.params.food;
        let diet = req.params.diet;
        let apiID = process.env.API_ID;
        let apiKey = process.env.API_KEY;

        if (req.params.diet != "No-Diet") {
          axios
            .get(
              `https://api.edamam.com/search?q=${food}&app_id=${apiID}&app_key=${apiKey}&health=${diet}`
            )
            .then(function(response) {
              res.json(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          axios
            .get(
              `https://api.edamam.com/search?q=${food}&app_id=${apiID}&app_key=${apiKey}`
            )
            .then(function(response) {
              res.json(response.data);
            })
            .catch((err) => {
              if (err) throw err;
            });
        }
    }
}