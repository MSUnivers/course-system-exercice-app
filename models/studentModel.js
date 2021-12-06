const {model,Schema}=require('mongoose');

const studentSchema=new Schema({
fullName:{type:String, required:true},
phone:{type:String, required:true},
address:{type:String, required:true},
dob:{type:String, required:true}


})
module.exports=model('Student',studentSchema)