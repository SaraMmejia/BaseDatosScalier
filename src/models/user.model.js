const { Schema, model } = require('mongoose');

const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const uniqueEmail = {
  validator(value) {
    return models.User.findOne({ Email: value })
      .then((user) => !user)
      .catch(() => false);
  },
  message: 'El email ya existe',
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      requiered: [true, 'Nombre es un campo requerido'],
    },
    userName: {
      type: String,
      required: [true, 'UserName es un campo requerido'],
    },
    email: {
      type: String,
      required: [true, 'Email es un campo requerido '],
      match: [emailTest, 'Correo invalido'],
      validate: [uniqueEmail],
    },
    password: {
      type: String,
      required: [true, 'Constraseña es un campo requerido'],
    },
  },
  {
    timestamps: true,
  }
);

const User = model(User, userSchema);

module.exports = User;
