const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require("./Routes/Auth");
const postRoute = require("./Routes/Posts");
// const userRoute = require("./Routes/User");
const app = express();

dotenv.config();
app.use(express.json());
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
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
// app.use("/api/users", userRoute);
app.listen(3001, () => {
  console.log("app is istening on port 3000");
});
