const BookModel = require('../models/bookModel')

const createBook= async function(req,res){
    let data1 = req.body
    let savedData1=await BookModel.create(data1)
    res.send({msg:savedData1})
}

const getBooksData= async function(req,res){
    let allBook =await BookModel.find()
    res.send({msg:allBook})
}
module.exports.createBook=createBook
module.exports.getBooksData=getBooksData