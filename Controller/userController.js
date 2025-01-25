const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// register user
// POST api/contacts/register
// public access

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("All field are mand");
  }

  const availmail = await User.findOne({ email });

  if (availmail) {
    res.status(400);
    throw new Error("Email already exists");
  }

  const hashpass = await bcrypt.hash(password, 10);
  console.log("Hashed password ", hashpass);

  const user = await User.create({
    name,
    email,
    password: hashpass,
  });

  console.log(`registered user ${user}`);
  if (user) {
    res.status(200).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not found");
  }
});

// login user
// POST api/contacts/login
// public access

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Enter all details");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    // jwt token generated both front and back end , user send data from frontend in jwt fromat and decoded in backend eg:"firebase"
    const accessToken = jwt.sign(
      {
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(400).json("wrong password");
  }
});

// current0 user details
// GET api/contacts/current
// private   access

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user details" });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
