const mongoose = require("mongoose");

const catagorySchema = mongoose.Schema({
  catName: {
    type: String,
    required: true,
    //   unique: true,
  },
});

module.exports = mongoose.model("Catagory", catagorySchema);
