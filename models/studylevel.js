const mongoose = require('mongoose');

//StudyLevel SCHEMA
const StudyLevelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:2,
        maxlength:40
    }  
})

module.exports = new mongoose.model('StudyLevel', StudyLevelSchema);