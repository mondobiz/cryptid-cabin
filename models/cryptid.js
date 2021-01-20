const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cryptidSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    lastKnownLocation: String
  }
);

module.exports = mongoose.model("Cryptid", cryptidSchema);