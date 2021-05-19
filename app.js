const mongoose = require("mongoose")

require('dotenv').config();
const express = require('express');

require('./configs/db.config');

const app = express();

require('./configs/middleware.config')(app);
require('./configs/cors.config')(app);

require('./configs/session.config')(app);
require('./configs/passport.config')(app);

mongoose
  .connect(
  	process.env.MONGODB_URI,
  	{
    	keepAlive: true,
    	useNewUrlParser: true,
    	useUnifiedTopology: true
  	}
	);

const recipeRouter = require('./routes/recipes.routes');
const authRouter = require('./routes/auth.routes');

app.use('/api/recipes', recipeRouter);
app.use('/api/auth', authRouter);

app.use((req, res) => {
  res.sendFile(__dirname + "public/index.html")
});

app.use((req, res, next) => {
  return res.status(404).json({ message: "Not found"});
})

module.exports = app;