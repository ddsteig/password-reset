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

  getOneUser: (req, res) => {
    db.User.findOne({ _id: req.params.id })
      .populate("trips")
      .exec()
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        return res.status(500).send(err)
      })
  },

  updateUser: (req, res) => {
    const id = req.params.id;
    const update = req.body;

    if (Object.keys(update).length === 0) {
      return res.status(400).send("Bad Request");
    }
    if (update.email) return res.status(401).send("Email change not allowed");
    if (update.password)
      return res
        .status(401)
        .send("Password cannot be changed from this endpoint");

    db.User.findOneAndUpdate({ _id: id }, update)
      .then((oldUser) => {
        User.findOne({ _id: oldUser.id })
          .exec()
          .then((newUser) => {
            res.status(200).json(newUser);
          })
          .catch(() => {
            res.status(404).json("Not Found");
          });
      })
      .catch(() => {
        res.status(404).json("Not Found");
      });
  },
};
