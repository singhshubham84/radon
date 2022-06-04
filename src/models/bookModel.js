const mongoose =require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: {
       type: String,
       unique:true,
       required:true
    },
    category:String,
    year:Number
},{timestamps:true}); 

module.exports=mongoose.model("book",bookSchema)