const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
},{
  timestamps: true
});

const Post = mongoose.model("Post", PostSchema);

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