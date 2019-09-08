const express = require("express");
const router = express.Router();
const Apply = require("../../models/Apply");

router.post("/", (req, res) => {
  newApplication = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    education: req.body.education
  };

  new Apply(newApplication).save().then(contact => res.json(contact));
});

router.get("/", (req, res) => {
  Apply.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
