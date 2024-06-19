const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const config = require('../config/config')
// const wallet = require('../schema//wallet')

// Defining User schema 
const taskSchema = new Schema(
    {
        leadName: {
            type: String,
            required: true
        },
        taskType: {
            type:  Schema.Types.ObjectId,
            required: true,
            ref:'taskType'
        },
        description: {
            type: String
        },
        taskDate: {
            type: Date,
            required: true
        }
    }
)

// Defining User model 
const task = mongoose.model('task', taskSchema, 'task');
module.exports = task