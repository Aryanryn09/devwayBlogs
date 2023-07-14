const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      type: String,
      required: false,
    },
    catagories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
