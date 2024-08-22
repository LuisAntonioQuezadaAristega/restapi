require('dotenv').config();
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['token'];

  if (!token) {
    return res.status(408).json({ message: 'No se encuentra el token' });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(408).json({ message: 'Fallo al autenticar el token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
