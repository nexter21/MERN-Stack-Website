const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readdir("./client/src/components/courses/videos", (err, items) => {
    res.json({ items });
  });
});

router.post("/topics", (req, res) => {
  let ourItems = [];
  const folderName = req.body.folderName;

  fs.readdir(
    `./client/src/components/courses/videos/${folderName}`,
    (err, items) => {
      let i;
      for (i = 0; i < items.length; i++) {
        if (
          items[i].substring(items[i].length - 3, items[i].length) !== "jpg"
        ) {
          ourItems.push(items[i]);
        }
      }
      res.json({ videos: ourItems });
    }
  );

  // res.json({ videos: ourItems });
});

router.post("/videos", (req, res) => {
  const folderName = req.body.folderName;

  let listOfCourses = [];

  fs.readdir(
    `./client/src/components/courses/videos/full stack/${folderName}`,
    (err, items) => {
      let i;
      for (i = 0; i < items.length; i++) {
        if (items[i].substring(items[i].length - 3, items[i].length) == "mp4") {
          listOfCourses.push(items[i]);
        }
      }

      // listOfCourses = items;
      res.json({ items: listOfCourses });
    }
  );
});

router.get("/empty", (req, res) => {
  res.json({ videos: [] });
});

module.exports = router;
