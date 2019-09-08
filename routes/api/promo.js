const express = require("express");
const router = express.Router();
const PromoClient = require("../../models/PromoClient");
const Mailing = require("./nodemailing");
const axios = require("axios");

router.post("/", (req, res) => {
  let userIpLocation = "";
  axios.get("http://gd.geobytes.com/GetCityDetails").then(resp => {
    const ip = resp.data;
    userIpLocation = ip.geobytesfqcn;

    newClient = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      passportNumber: req.body.passportNumber,
      currentCity: req.body.currentCity,
      noOfPeople: req.body.departure,
      country: req.body.country,
      destination: req.body.destination,
      price: req.body.price,
      ipLocation: req.body.ipLocation,
      packageDate: req.body.packageDate
    };
    console.log("yup promo offer");

    Mailing(newClient);
    new PromoClient(newClient).save().then(client => res.json(client));
  });
});

router.get("/", (req, res) => {
  PromoClient.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
