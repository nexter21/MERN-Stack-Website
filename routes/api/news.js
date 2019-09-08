const express = require("express");
const router = express.Router();
const Mailing = require("./nodemailing");
const News = require("../../models/News");

router.post("/", (req, res) => {
  newNews = {
    title: req.body.title,
    theme: req.body.theme,
    email: req.body.email,
    ip: req.body.ip
  };
  Mailing(newNews);
  new News(newNews).save().then(contact => res.json(contact));
});

router.get("/", (req, res) => {
  News.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostfound: "No post founded" }));
});

module.exports = router;
