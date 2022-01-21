const mongoose = require('mongoose')
const Teacher = require('./teacher');
const StudyLevel = require('./studylevel')

const lectureSchema = new mongoose.Schema({

    lecture_name: {
        type: String,
        required: true
    },
    lecture_Teacher: Teacher.schema,
    lecture_StudyLevel: StudyLevel.schema,
    lecture_Link: {
        type: String,
        required: true
    },
    lecture_Thumbnail: {
        type: String,
        required: true
    },
    lecture_Count: {
        type: String,
        required: true
    }

})

module.exports = new mongoose.model('Lecture', lectureSchema)