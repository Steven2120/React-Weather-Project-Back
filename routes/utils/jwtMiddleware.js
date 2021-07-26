const jwt = require("jsonwebtoken");

async function checkJwtToken(req, res, next) {
  try {
  } catch (e) {
    console.log(e.message);
    console.log(e.code);
    res.status(e.statusCode).json({ message: e.message, error: e });
  }
}

module.exports = checkJwtToken;
