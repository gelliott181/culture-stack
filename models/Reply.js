var mongoose = require('mongoose');

var ReplySchema = new mongoose.Schema({
  body : {
    type: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  },
  parent:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Comment"
  }
},{
  timestamps: true
});

var Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;