const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining User schema 
const taskTypeSchema = new Schema(
  {
    name: {
      type:String
    }
  }
)
// Defining User model 
const taskType = mongoose.model('taskType', taskTypeSchema, 'taskType');
module.exports = taskType