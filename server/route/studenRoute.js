const Router = require('express');
const express = require('express');
const router = Router();
const Student = require('../model/Student');


router.post('/studentdata', async(req,res)=>{
    try {
        let student = await Student.create(req.body)
        res.status(200).json({sucess:true,student})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})


router.get('/getstudent', async(req,res)=>{
    try {
        let student = await Student.find()
        res.status(200).json({sucess:true,student})
        
    } catch (error) {
        console.log(error)
        res.status(500).json("Internal Server error")
    }
})

module.exports = router