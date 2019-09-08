const express = require("express");
const router = express.Router();
const QuickUsers = require("../../models/Quick");
const Mailing = require("./nodemailing");
const axios = require("axios");

router.post("/", (req, res) => {
  let userIpLocation = "";
  axios.get("http://gd.geobytes.com/GetCityDetails").then(resp => {
    const ip = resp.data;
    userIpLocation = ip.geobytesfqcn;

    newMessage = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      ipLocation: req.body.ipLocation
    };
    console.log("Sending Mail....");
    Mailing(newMessage);

    new QuickUsers(newMessage).save().then(contact => res.json(contact));
  });
});

router.get("/", (req, res) => {
  QuickUsers.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
