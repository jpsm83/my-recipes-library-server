const express = require('express');
const Recipe = require('../models/Recipe.model');
const router = express.Router();

router.get("/recipes", (req, res, next) => {
  Recipe.find()
  .then(recipes =>  res.status(200).json(recipes))
  .catch(err => res.status(500).json(err))
})

router.get("/recipes/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOne({ _id: id })
  .then(todo => res.status(200).json(todo))
  .catch(err => res.status(500).json(err))
})

router.post("/recipes/recipeForm", (req, res, next) => {
  const { dishName, cousine, type, image, ingredients, prepTime, preparation, howToCook } = req.body;

  if(!dishName || !ingredients || !prepTime || !preparation || !howToCook){
    return res.status(400).json({ message: "This field is required"});
  }

  Recipe.create({ dishName, cousine, type, image, ingredients, prepTime, preparation, howToCook })
  .then(recipe => res.status(200).json(recipe))
  .catch(err => res.status(500).json(err))
})

router.put("/recipes/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOneAndUpdate({ _id: id }, req.body, { new: true })
  .then(recipe => res.status(200).json(recipe))
  .catch(err => res.status(500).json(err))
})

router.delete("/recipes/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOneAndRemove({ _id: id })
  .then(() => res.status(200).json({ message: `Recipe ${id} deleted`}))
  .catch(err => res.status(500).json(err))
})

module.exports = router;