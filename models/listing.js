const mongoose = require("mongoose");
const Schema = mongoose.Schema; // class

const Listing = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

// Export Schema with the name User
module.exports = mongoose.model("listings", Listing);
