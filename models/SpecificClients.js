const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SpecificClientSchema = new Schema({
  noOfPeople: {
    type: Number,
    required: true
  },
  visitDate: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  message: {
    type: String
  },
  heading: {
    type: String
  },
  ipLocation: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = SpecificClient = mongoose.model(
  "specificClients",
  SpecificClientSchema
);
