const express = require("express");
const Recipe = require("../models/Recipe.model");
const User = require("../models/User.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  // get the personal recipes
  Recipe.find({})
  .populate("chef", "username")
    .then((recipes) => res.status(200).json(recipes))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  // get an especific recipe
  Recipe.findOne({ _id: id })
  .populate("chef", "username")
    .then((recipe) => res.status(200).json(recipe))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res, next) => {
  const {
    dishName,
    cousine,
    type,
    image,
    ingredients,
    prepTime,
    preparation,
    howToCook,
    servings,
  } = req.body;
  if (!req.body) {
    // error code 400 - bad request
    return res.status(400).json({ message: "All fields are required" });
  }

  Recipe.create({
    dishName,
    cousine,
    type,
    image,
    ingredients,
    prepTime,
    preparation,
    howToCook,
    servings,
    chef: req.user.id,
  })
    .then((recipe) => {
      const userId = req.user.id;
      User.findOneAndUpdate(
        { _id: userId },
        { $push: { myRecipes: recipe.id } },
        { new: true }
      )
        .then((updateUser) => {
          res.status(200).json(updateUser);
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  // find a recipe and let only the owner of it update it using req.user.id
  Recipe.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  })
    .then((recipe) => res.status(200).json(recipe))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  // find a recipe and let only the owner of it delete it using req.user.id
  Recipe.findOneAndRemove({ _id: id })
    .then(() => {
      const userId = req.user.id;
      User.findOneAndUpdate(
        { _id: userId },
        { $pull: { myRecipes: id } },
        { new: true }
      )
        .then((updateUser) => {
          res.status(200).json(updateUser);
        })
        .catch((err) => res.status(500).json(err));
    })

    .catch((err) => res.status(500).json(err));
});

module.exports = router;
