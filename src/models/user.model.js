const { Schema, model, models } = require('mongoose');

const emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const uniqueEmail = {
  validator(value) {
    return models.User.findOne({ email: value })
      .then((user) => !user)
      .catch(() => false);
  },
  message: 'El email ya existe',
};

const uniqueUserName = {
  validator(value) {
    return models.User.findOne({ userName: value })
      .then((user) => !user)
      .catch(() => false);
  },
  message: 'El UserName ya existe',
};

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Nombre es un campo requerido'],
      minlength: [1, 'Escribe un nombre más largo'],
    },
    userName: {
      type: String,
      required: [true, 'UserName es un campo requerido'],
      validate: [uniqueUserName],
      minlength: [4, 'UserName debe contener mínimo 4 carácteres'],
      maxlength: [20, 'UserName debe contene máximo 20 carácteres'],
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

const User = model('User', userSchema);

module.exports = User;
