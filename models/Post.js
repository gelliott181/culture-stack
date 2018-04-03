const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Post title required"]
  },
  QA: {
    type: String
  },
  img_filename:{
    type: String
  },
  aperture:{
    type: String
  },
  ISO:{
    type: String
  },
  speed: {
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