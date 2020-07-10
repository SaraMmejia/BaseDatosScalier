const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    picture: {
      type: String,
      required: [true, 'Picture es un campo requerido'],
    },
    name: {
      type: String,
      required: [true, 'Name es un campo requerido'],
    },
    description: {
      type: String,
      required: [true, 'Description es un campo requerido'],
    },
  },
  {
    timestamps: true,
  }
);

const Post = model(Post, postSchema);

module.exports = Post;
