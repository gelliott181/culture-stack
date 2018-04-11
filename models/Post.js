const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Post title required"]
  },
  QP: {
    type: String
  },
  img_url:{
    type: String
  },
  aperture:{
    type: String
  },
  iso:{
    type: String
  },
  speed: {
    type: String
  },
  camera: {
    type: String
  },
  lens: {
    type: String
  },
  body:{
    type: String
  },
  tags:[{
    type: String
  }],
  author:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
},{
  timestamps: true
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;