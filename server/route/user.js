const Router = require('express');
const express = require('express');
const router = Router();
const {User}  = require('../model/User')
// const router = require('express).Router()


router.post('/signup', async(req,res)=>{
    try {
        let user = await User.create(req.body)
        res.status(200).json({sucess:true,user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})


router.post('/login', async(req,res)=>{
    try {
        

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internam server error"})
    }
})

module.exports = router