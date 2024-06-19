// Set Up the Database connection 
const mongoose = require('mongoose');
const config = require('../config/config')

mongoose.connect(`mongodb://${config.username}:${config.password}@localhost:${config.port}/${config.dataBase}`).then((result) => {
    console.log('Connection Established')
}).catch((err) => {
    console.log(err)
});
