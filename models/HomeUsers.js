const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomeUsersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  country: {
    type: String
  },
  ipLocation: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = HomeUsers = mongoose.model("homeUsers", HomeUsersSchema);
