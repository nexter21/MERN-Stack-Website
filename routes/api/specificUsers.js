const express = require("express");
const router = express.Router();
const SpecificClient = require("../../models/SpecificClients");
const Mailing = require("./nodemailing");
const axios = require("axios");

router.post("/", (req, res) => {
  let userIpLocation = "";
  axios.get("http://gd.geobytes.com/GetCityDetails").then(resp => {
    const ip = resp.data;
    userIpLocation = ip.geobytesfqcn;
    newClient = {
      noOfPeople: req.body.noOfPeople,
      visitDate: req.body.visitDate,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      ipLocation: req.body.ipLocation,
      message: req.body.message,
      heading: req.body.heading
    };
    Mailing(newClient);
    new SpecificClient(newClient).save().then(client => res.json(client));
  });
});

router.get("/", (req, res) => {
  SpecificClient.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
