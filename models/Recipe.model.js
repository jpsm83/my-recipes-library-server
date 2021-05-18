const { urlencoded } = require('body-parser');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    dishName: { type: String, maxlength: 500, required: true, unique: true },
    cousine: { type: String, maxlength: 250 },
    type: { type: String, maxlength: 100 },
    image: { type: String },
    ingredients: { type: String, required: true },
    prepTime: { type: String, required: true },
    preparation: { type: String, required: true },
    howToCook: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;

      return ret;
    }
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;