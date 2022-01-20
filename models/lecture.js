const mongoose = require('mongoose')

const lectureSchema = new mongoose.Schema({

    lecture_name: {
        type: String,
        required: true
    },
    lecture_Teacher_Id_Fk: {
        type: String,
        required: true
    },
    lecture_StudyLevel_Id_Fk: {
        type: String,
        required: true
    },
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

module.exports = mongoose.model('Lecture', lectureSchema)