const { Schema, model } = require('mongoose');

const likeSchema = new Schema(
  {
    ownerName: String,
    owner: String,
    postId: String,
  },
  {
    timestamps: true,
  }
);

const Like = model('Like', likeSchema);

module.exports = Like;
