const taskTypes = require('../schema/task-type')
const task = require('../schema/task')
const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

module.exports = {
    index: async function (req, res) {
        let data = await task.find().populate('taskType')
        res.render('index', { title: 'Express', data });
    },
    addTask: async function (req, res) {
        let typesOfTask = await taskTypes.find()
        res.render('addTask', { title: 'addUser', typesOfTask });
    },
    taskAdded: async function (req, res, next) {
        try {
            await task.create({
                leadName: req.body.leadName,
                taskType: req.body.taskType,
                description: req.body.description,
                taskDate:new Date(req.body.taskDate)
            })
            res.redirect("/")
        }
        catch (error) {
            console.log(error);
            next(error)
        }
    },
    editTask: async function (req, res) {
        if (req.method == "POST") {
            await task.updateOne({ _id: req.params.id }, {
                $set: {
                    name: req.body.name,
                    author: req.body.author,
                    summary: req.body.summary,
                    genre: req.body.genre,
                }
            })
            res.redirect('/')
        }
        else {
            let taskToedit = await task.findOne({ _id: req.params.id }).populate('taskType')
            let taskList = await taskTypes.find()
            let id = taskToedit._id
            let leadName = taskToedit.leadName
            let taskType = taskToedit.taskType
            let description = taskToedit.description
            let taskDate = new Date(taskToedit.taskDate)
            res.render('editTask', { title: 'edit', leadName, taskType, description, taskDate, id, taskList})
        }
    },
    deleteTask: async function (req, res) {
        await task.findOneAndDelete({ _id: req.params.id })
        res.redirect('/')
    }
}