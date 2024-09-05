const User = require('../models/user'); // Import User model

// Get user profile by ID
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // Exclude password from result
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  const { name, jobTitle, skills, projects } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Update fields
    if (name) user.name = name;
    if (jobTitle) user.jobTitle = jobTitle;
    if (skills) user.skills = skills;
    if (projects) user.projects = projects;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Export controller functions
module.exports = {
  getUserProfile,
  updateUserProfile,
};
