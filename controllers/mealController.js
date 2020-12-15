const db = require("../database/models/");

// Defining methods for the mealController
module.exports = {
  findAll: function (req, res) {
    db.Meal.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByUserId: function (req, res) {
    db.Meal.find({ user: req.params.user_id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findByType: function (req, res) {
    db.Meal.find({ user: req.params.user_id, type: req.params.type })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Meal.create({
      type: req.body.type,
      name: req.body.name,
      img: req.body.img,
      ingredients: req.body.ingredients,
      servings: req.body.servings,
      calories: req.body.calories,
      user: req.body.user,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Meal.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
