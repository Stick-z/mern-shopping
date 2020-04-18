const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create new schema
const ItemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("item", ItemSchema);
