const { Router } = require('express')
const express = require('express')
const router = express.Router()
const Lecture = require('../models/lecture')

router.get('/', async(req,res) => {
    try{
        const lectures = await Lecture.find()
        res.json(lectures)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req,res) => {
    //res.send('Get request')
    try{
        const lectures = await Lecture.findById(req.params.id)
        res.json(lectures)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const lecture = new Lecture({
        lecture_name: req.body.lecture_name,
        lecture_Teacher_Id_Fk: req.body.lecture_Teacher_Id_Fk,
        lecture_StudyLevel_Id_Fk: req.body.lecture_StudyLevel_Id_Fk,
        lecture_Link: req.body.lecture_Link,
        lecture_Thumbnail: req.body.lecture_Thumbnail,
        lecture_Count: req.body.lecture_Count
    })

    try{
        const l1 = await lecture.save()
        res.json(l1)

    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id', async(req,res)=> {
    try{
        const lecture = await Lecture.findById(req.params.id)
        lecture.lecture_name = req.body.lecture_name
        lecture.lecture_Link = req.body.lecture_Link
        const l1 = await lecture.save()
        res.json(l1)
    }catch(err){
        res.send('Error')
    }
})

module.exports = router