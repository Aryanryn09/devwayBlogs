const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(console.log("connectend to mongo db"))
  .catch((err) => {
    console.log(err);
  });
app.use("/", (req, res) => {
  console.log("this is the root path");
});
app.listen(3001, () => {
  console.log("app is istening on port 3000");
});
