const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_TOKEN } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.header('token');
  if (!req.header('token')) {
    return res.status(400).send({ message: 'token is required' })
  } else {
    jwt.verify(token, JWT_PRIVATE_TOKEN, function (err, decoded) {
      if (!err) {
        if (decoded.role === "user") {
          next()
        } else {
          return res.status(400).send({ message: "token is not valid" })
        }
      }
    });
  }
}

module.exports = verifyToken;