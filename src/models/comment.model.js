const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    write: {
      type: String,
      minlength: [1, 'El comentario debe tener más de 1 caracteres'],
      maxlength: [500, 'El comentario debe tener menos de 500 caracteres'],
    },
  },
  {
    timestamps: true,
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
