const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.header("Authorization");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Extract the token from "Bearer <token>"
    const extractedToken = token.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(extractedToken, process.env.JWT_SECRET);

    // Attach the user to the request object
    req.user = decoded;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;