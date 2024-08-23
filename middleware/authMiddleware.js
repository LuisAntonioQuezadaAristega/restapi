require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET; 

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('Authorization Header:', authHeader);

  if (!authHeader) {
    return res.status(408).send('Request Timeout. No token provided.');
  }


  const token = authHeader;
  console.log('Extracted Token:', token); 

  if (!token) {
    return res.status(408).send('Request Timeout. Invalid token format.');
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    console.log('Decoded Token:', decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(408).send('Request Timeout. Invalid token.');
  }
};