const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        trim:true,
        unique:true
    },
    collegeId:{
        type:ObjectId,
        ref:"College"
    },
    isDeleted:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

module.exports = mongoose.model("Intern",internSchema)