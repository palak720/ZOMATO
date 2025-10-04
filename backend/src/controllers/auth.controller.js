
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // bcrypt import missing tha

// ================= Register =================
async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;

    // Check if user already exists
    const isUserAlreadyExits = await userModel.findOne({ email });
    if (isUserAlreadyExits) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await userModel.create({
      fullName,
      email,
      password: hashedPassword,
    });

    // Generate token
    const token = jwt.sign(
      { id: user._id },
     process.env.JWT_SECRET
    );

    // Set cookie + response
    res.cookie("token", token);
    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

// ================= Login =================
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id },
     process.env.JWT_SECRET
    );

    // Set cookie + response
    res.cookie("token", token);
    res.status(200).json({
      message: "User logged in successfully",
      user: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

//---------logout------------
 function logoutUser(req,res){
  res.clearCookie("token");
  res.status(200).json({
    message:"User loggout out successfully"
  });
 }

module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
