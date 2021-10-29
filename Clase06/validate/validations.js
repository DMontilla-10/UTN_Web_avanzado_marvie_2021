const jwt = require('jsonwebtoken');

const generateAccessToken = async (userData) => {
  const token = await jwt.sign(userData, process.env.PRIVATE_KEY, {
    expiresIn: "24h",
  });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid token" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({ message: "Forget token" });
  }
};

module.exports = {generateAccessToken, verifyToken}