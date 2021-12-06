
const mongoose=require('mongoose')
const {Schema,model}=require('mongoose')
const Student=require('./studentModel')

const classSchema = new Schema({
    title:{type:String,required:true},
    start:{type:Date,default:Date()},
    end:{type:Date,default:Date.now()},
    type:[{type:String}],
    participants:[{type:Schema.Types.ObjectId,ref:'Student'}]
})

module.exports=model('Class',classSchema)