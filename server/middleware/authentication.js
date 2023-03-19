const jwt = require("jsonwebtoken");

//make sure user is logged in - Authentication
exports.ensureAuthenticated = (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized! Please login first",
        });
      }
    });
  } catch (error) {
    return next({
      status: 401,
      message: "Unauthorized! Please login first",
    });
  }
};

//make sure correct user is logged in - Authorization
exports.ensureCorrectUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized!",
        });
      }
    });
  } catch (error) {
    return next({
      status: 401,
      message: "Unauthorized!",
    });
  }
};
