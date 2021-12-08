// mongoose is a mongodb library that help to create models easyer and faster
const mongoose = require("mongoose");

mongoose
  .connect(`${process.env.DBURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to Mongoose"))
  .catch((error) => console.error(error));

module.exports = mongoose;
