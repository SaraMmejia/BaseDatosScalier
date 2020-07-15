const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({ message: 'Tú sesión ha expirado ' });
    }
    req.user = jwt.verify(token, process.env.SECRET);
    next();
  },
};
