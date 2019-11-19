const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const axios = require('axios');

const cosmicObjects = require("./routes/api/cosmic_objects");
const users = require("./routes/api/users");
const comments = require("./routes/api/comments");
const CosmicObject = require('./models/CosmicObject');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/cosmicobjects", cosmicObjects);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
});