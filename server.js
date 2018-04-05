const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      dotenv = require('dotenv'),
      AWS = require('aws-sdk'),
      Busboy = require('busboy');
      connectBusboy = require('connect-busboy'),
      busboyBodyParser = require('busboy-body-parser');

// Store models in db
const db = require("./models");

// Create Express App and set connection port
const app = express();
const PORT = process.env.PORT || 3001;

// If deployed, use the deployed database. Otherwise use the local database.
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cultureStackDB";

// Set mongoose and connect to Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {});

// Use Busboy!
app.use(connectBusboy());

// Use that Body Parser thing
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(busboyBodyParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// require('./passport')(app);

//Import Routes
require('./routes/aws-upload')(app, AWS, Busboy, dotenv, db);
const routes = require('./routes');
app.use(routes);



// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, () => console.log(`🌎 ==> Server now on port ${PORT}!`));
