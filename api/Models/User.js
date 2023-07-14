const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },

    profile: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 12);
    // this.cpassword = bcrypt.hash(this.cpassword, 12);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);

//here define the hashing of the password
