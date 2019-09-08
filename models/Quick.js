const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuickSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  ipLocation: {
    type: String
  },
  message: {
    type: String
  }
});

module.exports = Quick = mongoose.model("quick", QuickSchema);
