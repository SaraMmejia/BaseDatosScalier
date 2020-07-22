const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

module.exports = {
  async auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: 'Tú sesión ha expirado' });
    }
    req.user = jwt.verify(token, process.env.SECRET);
    const user = await User.findById(req.user.id);
    req.user.userName = user.userName;
    console.log('user', user);
    next();
  },
};
