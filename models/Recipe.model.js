// mongoose is a mongodb library that help to create models easyer and faster
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    dishName: { type: String, maxlength: 200, required: true },
    cousine: { type: String, maxlength: 250, required: true },
    type: { type: String, maxlength: 100, required: true  },
    image: { type: String, default:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
},
    ingredients: { type: String, maxlength: 1000, required: true },
    prepTime: { type: String, required: true },
    preparation: { type: String, maxlength: 2000, required: true },
    howToCook: { type: String,maxlength: 2000, required: true },
    servings : { type: String, required: true },
    chef: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;

        return ret;
      },
    },
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;