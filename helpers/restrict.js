const jwt = require("jsonwebtoken");
const TOKEN_KEY = "somethingsupercoolandcomplicated"; // Hard-coded token key?

// Express custom middleware
const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // takes the token from req.headers
    const data = jwt.verify(token, TOKEN_KEY);
    // res.locals.user = data
    next(); // procede to next step in controller
  } catch (error) {
    console.log(error);
    res.status(403).send("Unauthorized access");
  }
};

module.exports = restrict;
