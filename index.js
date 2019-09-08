const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const applications = require("./routes/api/applications");
const specificClients = require("./routes/api/specificUsers");
const promo = require("./routes/api/promo");
const homeUsers = require("./routes/api/homeUsers");
const quick = require("./routes/api/quick");
const news = require("./routes/api/news");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/applications", applications);
app.use("/api/specificClient", specificClients);
app.use("/api/promo", promo);
app.use("/api/homeUsers", homeUsers);
app.use("/api/quick", quick);
app.use("/api/news", news);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
