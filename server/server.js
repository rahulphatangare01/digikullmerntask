// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const port = process.env.port || 5051
const User=require('./route/user')
const Student = require('./route/studenRoute')


//  middleware
app.use(express.json());
app.use(cors());

//  routes
app.use('/api/data', User)
app.use('/api/data',Student)
//  Database connected 
mongoose.connect('mongodb://localhost:27017/digikullproject').then(()=>{
    console.log("Database conneted")
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})