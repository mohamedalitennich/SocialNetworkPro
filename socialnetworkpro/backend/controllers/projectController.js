const Project = require('../models/project'); // Import Project model

// Create a new project
const createProject = async (req, res) => {
  const { name, description, tasks } = req.body;

  try {
    const project = new Project({
      name,
      description,
      createdBy: req.user.id,
      tasks,
    });

    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createProject,
  getAllProjects,
};
