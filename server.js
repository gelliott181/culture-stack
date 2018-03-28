const express = require("express"),
      path = require("path"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");


// Store models in db
const db = require("./models");

// Create Express App and set connection port
const app = express();
const PORT = process.env.PORT || 3001;

// Use that Body Parser thing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// If deployed, use the deployed database. Otherwise use the local database.
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cultureStackDB";

// Set mongoose and connect to Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

//Import API routes
require("./routes/api.js")(app, db);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));
