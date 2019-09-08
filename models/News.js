const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  ip: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  }
});

module.exports = News = mongoose.model("news", NewsSchema);
