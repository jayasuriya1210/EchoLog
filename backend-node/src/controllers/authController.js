const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = new User(req.body);

    await user.save();

    res.json({
      message: "User registered successfully"
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};