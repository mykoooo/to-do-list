const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Render Task List
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.render("index", { tasks });
});

// Add New Task
router.post("/tasks", async (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = new Task({ title, description, dueDate });
  await newTask.save();
  res.redirect("/");
});

// Mark Task as Complete
router.post("/tasks/:id/complete", async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { status: "completed" });
  res.redirect("/");
});

// Edit Task
router.post("/tasks/:id/edit", async (req, res) => {
  const { title, description, dueDate } = req.body;
  await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate });
  res.redirect("/");
});

// Delete Task
router.post("/tasks/:id/delete", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
