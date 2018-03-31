const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: "Post"
  }]
});

const User = mongoose.model("User", UserSchema);

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