const router = require("express").Router();
const User = require("../Models/User");

//Register
router.post("/register", async (req, res) => {
  try {
    // var salt = await bcrypt.genSalt(10);
    // var hash = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //post newuser

    //pre saved method
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = User.findOne({
      username: req.body.username,
    });
    !user && res.status(400).json("wrong credentials");
    req.body.password === user.password
      ? res.status(200).json(user)
      : res.status(404).json("wrong credentials");
  } catch (error) {
    req.status(500).json(error);
  }
});

module.exports = router;
