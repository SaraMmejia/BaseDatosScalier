const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    image: {
      type: String,
      required: [true, 'Imagen es un campo requerido'],
    },
    title: {
      type: String,
      required: [true, 'Name es un campo requerido'],
      minlength: [2, 'El título debe tener más de 2 caracteres'],
      maxlength: [15, 'El títilo debe tener menos de 15 caracteres'],
    },
    tags: {
      type: String,
      enum: ['Animación 3D', 'Interiorismo', 'Casas', 'Edificios', 'Clásicos'],
    },
    description: {
      type: String,
      required: [true, 'Description es un campo requerido'],
      minlength: [2, 'El título debe tener más de 5 caracteres'],
      maxlength: [500, 'El títilo debe tener menos de 500 caracteres'],
    },
    owner: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
