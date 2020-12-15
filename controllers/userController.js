const db = require("../database/models");

module.exports = {
  createUser: (req, res) => {
    console.log("req.body for creating a user in database", req.body);
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        return res.status(200).send("Good request");
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  },
};
