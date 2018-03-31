const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  body : {
    type: String,
    author: {
      type: Schema.Types.ObjectId,
      ref:"User"
    }
  },
  parent:{
    type: Schema.Types.ObjectId,
    ref:"Comment"
  }
},{
  timestamps: true
});

const Reply = mongoose.model("Reply", ReplySchema);

module.exports = Reply;