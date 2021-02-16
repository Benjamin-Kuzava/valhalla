const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "somethingsupercoolandcomplicated";

const signUp = async (req, res) => {
  try {
    // Retrieves user data from request body
    const { username, email, password } = req.body;
    // Hash password
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    // Create new user
    const user = new User({
      username,
      email,
      password_digest,
    });
    // Save new user
    await user.save();
    // Create JWT
    const payload = {
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(payload, TOKEN_KEY); // create token
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    // compares plain text password and hashed password from databse
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
      };

      const token = jwt.sign(payload, TOKEN_KEY); // signs user in
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Whenever a user is trying to access authorization-blocked routes, verify to make sure they're signed in.
const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY); // check if valid token
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {
  // not done
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate("listings");
    if (users) {
      return res.json(users);
    }
    res.status(404).json({ message: "Listing not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).populate("listings");
    if (user) {
      return res.json(user);
    }
    res.status(404).json({ message: "Listing not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signIn,
  signUp,
  verify,
  changePassword,
  getUsers,
  getUser,
};
