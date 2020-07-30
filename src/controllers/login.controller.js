const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = {
  async signin(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        throw Error('El usuario no existe');
      }

      const isValid = await bcryptjs.compare(req.body.password, user.password);

      if (!isValid) {
        throw Error('Usuario o contraseña invalida');
      }

      //cuando pasas las validaciones exitosamente, se pasa el Token con la misma clave secreta

      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: 60 * 60 * 24 * 365,
      });

      //Enviamos el token como respuesta.

      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
};
