const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  body:{
    type: String,
    author: {
      type: Schema.Types.ObjectId,
      ref:"User"
    }
  },
  parent:{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
},{
  timestamps: true
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;



/*
Date
Body 
Recipients


Parent References Comments, _id
Authorr References
Users, _id

*/