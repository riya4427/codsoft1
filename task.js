const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().populate('project');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { projectId, ...taskData } = req.body;
    const task = new Task(taskData);
    if (projectId) {
      task.project = projectId;
      await task.save();
      await Project.findByIdAndUpdate(projectId, { $push: { tasks: task._id } });
    }
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
