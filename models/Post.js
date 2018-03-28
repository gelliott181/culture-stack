var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post title required"]
  },
  category: {
    type: String,
    default: "Uncategorized"
  },
  type:{
    type: String
  },
  image:{
    type: String
  },
  audio:{
    type: String
  },
  body:{
    type: String
  },
  tags:{
    type: String
  },
  author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
},{
  timestamps: true
});

var Post = mongoose.model("Post", PostSchema);

module.exports = Post;


/*
Title
Date
Category
Type
Imagey 
Audio
Body
Tags


Author References Users, _id

*/