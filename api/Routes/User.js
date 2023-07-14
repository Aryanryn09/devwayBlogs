const router = require("express").Router();
const User = require("../Models/User");
//here implement the password hashing
//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.send(500).json(err);
    }
  } else {
    res.status(401).json("you cannot update account");
  }
});

//DELETER
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been  deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
