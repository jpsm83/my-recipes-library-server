const express = require('express');
const Recipe = require('../models/Recipe.model');
const router = express.Router();

router.get("/", (req, res, next) => {
  Recipe.find({ user: req.user.id })
  .then(recipes =>  res.status(200).json(recipes))
  .catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOne({ _id: id, user: req.user.id })
  .then(todo => res.status(200).json(todo))
  .catch(err => res.status(500).json(err))
})

router.post("/", (req, res, next) => {
  const { dishName, cousine, type, image, ingredients, prepTime, preparation, howToCook } = req.body;

  Recipe.create({ dishName, cousine, type, image, ingredients, prepTime, preparation, howToCook, user: req.user.id })
  .then(recipe => res.status(200).json(recipe))
  .catch(err => res.status(500).json(err))
})

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOneAndUpdate({ _id: id, user: req.user.id }, req.body, { new: true })
  .then(recipe => res.status(200).json(recipe))
  .catch(err => res.status(500).json(err))
})

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Recipe.findOneAndRemove({ _id: id, user: req.user.id },)
  .then(() => res.status(200).json({ message: `Recipe ${id} deleted`}))
  .catch(err => res.status(500).json(err))
})

module.exports = router;