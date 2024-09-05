const Group = require('../models/group'); // Import Group model

// Create a new group
const createGroup = async (req, res) => {
  const { name, description } = req.body;

  try {
    const group = new Group({
      name,
      description,
      admin: req.user.id,
    });

    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Join a group
const joinGroup = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).json({ msg: 'Group not found' });
    }

    group.members.push(req.user.id); // Add user ID to members array
    await group.save();
    res.json(group);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createGroup,
  joinGroup,
};
