const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { phone } = req.body;
    const profileImage = req.file ? req.file.path : req.user.profileImage;

    const user = await User.findByIdAndUpdate(req.user.id, { phone, profileImage }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
