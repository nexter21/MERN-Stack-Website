const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passportNumber: {
    type: String,
    required: true
  },
  currentCity: {
    type: String,
    required: true
  },
  ipLocation: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  noOfPeople: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  packageDate: {
    type: String
  }
});

module.exports = Promo = mongoose.model("promo", PromoSchema);
