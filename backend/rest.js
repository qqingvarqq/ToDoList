var express = require('express');
var mongoose = require('mongoose');
var Task = require('./models/task');

//connect to mongodb ToDoList Database
mongoose.connect('mongodb://localhost:27017/todolist');

var router = express.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
var tasksRoute = router.route('/tasks');
// Add new task
tasksRoute.post(function (req, res) {
    var task = new Task();
    // Set the task properties that came from the POST data
    console.log(req.body);
    task.title = req.body.title;
    task.description = req.body.description;
    task.deadline = req.body.deadline;
    task.status = req.body.status;
    // Save the task and check for errors
    task.save(function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'Task added to the Tasklist!', data: task });
    });
});
// Get all task
tasksRoute.get(function (req, res) {
    // Use the Task model to find all task
    Task.find(function (err, tasks) {
        if (err)
            res.send(err);
        res.json(tasks);
    });
});

var taskRoute = router.route('/tasks/:task_id');

// Updte status
taskRoute.put(function (req, res) {
    // Find task and update status
    Task.findById(req.params.task_id, function (err, task) {
        if (err)
            res.send(err);
        task.status = req.body.status;
        task.save(function (err) {
            if (err)
                res.send(err);
            res.json(task);
        });
    });
});
//Delete Task
taskRoute.delete(function (req, res) {
    // Use the Beer model to find a specific task and remove it
    Task.findByIdAndRemove(req.params.task_id, function (err) {
        if (err)
            res.send(err);
        res.json({ message: 'Task removed from Tasklist !' });
    });
});


//Export router
module.exports = router;