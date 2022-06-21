const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:String},
    class:{type:String},
    
})
const Student = mongoose.model('student', studentSchema)
module.exports = Student