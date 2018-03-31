var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username required" ],
    unique: true
  },
  password: {
    type: String,
    require: [true, "password required" ]
  },
  firstname: {
    type: String,
    require: [true, "first name required" ]
  },
  lastname: {
    type: String,
    require: [true, "last name required" ] 
  },
  avatar: {
    type: String
  },
  email: {
    type: String
  },
  score: {
    type: Number
  },
  occupation: {
    type: String
  },
  description: {
    type: String
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }]
});

var User = mongoose.model("User", UserSchema);

module.exports = User;

/*
Username
Password
First Name
Last Name
Avatar
Email
Score
Occupation
Description

*/