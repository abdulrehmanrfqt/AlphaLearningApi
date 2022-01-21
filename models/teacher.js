const mongoose = require('mongoose');

//TEACHER SCHEMA
const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:40
    }  
})

module.exports = new mongoose.model('Teacher', TeacherSchema);