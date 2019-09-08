const express = require("express");
const router = express.Router();
const HomeUsers = require("../../models/HomeUsers");
const Mailing = require("./nodemailing");
const axios = require("axios");

router.post("/", (req, res) => {
  let userIpLocation = "";
  axios.get("http://gd.geobytes.com/GetCityDetails").then(resp => {
    const ip = resp.data;
    userIpLocation = ip.geobytesfqcn;

    newApplication = {
      name: req.body.name,
      email: req.body.email,
      country: req.body.country,
      message: req.body.message,
      ipLocation: req.body.ipLocation
    };
    console.log("Sending Mail....");
    Mailing(newApplication);

    new HomeUsers(newApplication).save().then(contact => res.json(contact));
  });
});

router.get("/", (req, res) => {
  HomeUsers.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
