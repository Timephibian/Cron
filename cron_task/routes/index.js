var express = require('express');
var router = express.Router();
const {tryCatch} = require('../helpers/tryCatch')
const { index,addTask, taskAdded, editTask,deleteTask } = require('../controller/taskController')
/* GET home page. */

router.get('/', index);//Home Page


router.get('/addtask', tryCatch(addTask));//Hbs page for adding a city's weather


router.post('/added', tryCatch(taskAdded))//Process of adding weather to database

router.get('/edit/:id', tryCatch(editTask))

router.post('/edit/:id', tryCatch(editTask))

router.get('/delete/:id',tryCatch(deleteTask))

module.exports = router;
