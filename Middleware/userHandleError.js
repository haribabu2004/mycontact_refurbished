const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validtoken = asyncHandler(async (req, res, next) => {
  let token;
  let authheader = req.headers.authorization;

  // && authheader.startsWith("Bearer")                                       
  if (authheader) {                                                     
    token = authheader.split(" ")[1];                                      
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);                   
      console.log("Decoded Token:", decoded); // Debugging purpose                
      req.user = decoded.user;  // decode details in token and store in req.user                
      next(); // middleware                                                     
                                                                        
    if (!token) {
      res.status(401);
      throw new Error("user not authorised or token is missing");
    }
  } else {
    res.status(400);
    throw new Error("not inside validtoken");
  }
});

module.exports = validtoken;
