const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(408).json({ message: 'No token provided' });
  }

  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(408).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;