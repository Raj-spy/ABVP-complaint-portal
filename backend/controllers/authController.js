import User from "../models/User.js";
import bcrypt from "bcryptjs";


// SIGNUP CONTROLLER
export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful",
      user: { id: user._id, email: user.email }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// LOGIN CONTROLLER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      user: { id: user._id, email: user.email }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
