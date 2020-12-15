const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
  type: String,
  name: String,
  img: String,
  ingredients: [
    {
      type: String,
    },
  ],
  servings: Number,
  calories: Number,
  user: String,
});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;
