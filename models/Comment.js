var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
  body:{
    type: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  score:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{
  timestamps: true
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;


/*
Date
Body 
Score


Author References
Users, _id

Score Reference Users, _id / score

*/