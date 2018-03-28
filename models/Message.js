var mongoose = require("mongoose");

var MessageSchema = new mongoose.Schema({
  body:{
    type: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  parent:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }
},{
  timestamps: true
});

var Message = mongoose.model("Message", MessageSchema);

module.exports = Message;



/*
Date
Body 
Recipients


Parent References Comments, _id
Authorr References
Users, _id

*/