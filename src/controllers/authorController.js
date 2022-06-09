const res = require("express/lib/response")
const { set } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")


 //problem 1

const createAuthor = async function (req, res) {
    let data = req.body
    let authorId = data.author_id

 
    let savedData = await authorModel.create(data)
    res.send({ msg: savedData })
} 
//problem 2
const getId = async function (req, res) {

    let data = await authorModel.find({ author_name: "Chetan Bhagat" }).select("author_id")
    // console.log(data)
    let bookdata = await bookModel.find({ author_id: data[0].author_id }).select({ name: 1, _id: 0 })

    res.send({ msg: bookdata })
}

//problem 3
const authorOfBook = async function (req, res) {

     let data =await bookModel.findOneAndUpdate({name:"Two states"}, {$set: {prices: 100}}, {new:true})
  console.log(data)
        let Data1 =await authorModel.find({author_id: data.author_id }).select({author_name:1,_id:0})
        let prices=data.price
        console.log(Data1)
        res.send({msg:Data1,prices})
 
} 

//problem 4

const getAuthorData = async function (req, res) {

      let data =await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1,_id:0})
      // console.log(data)
      let authername = await authorModel.find({$or:data}).select({author_name:1,_id:0})
      res.send({msg:authername})
    
    }


 const bookByAuthor_id= async function(req,res){
    let ID = req.body.author_id
    console.log(ID)
    const getBooks = await bookModel.find({author_id : ID}).select({name : 1, _id : 0})

    res.send({data : getBooks })
}   
    









module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData
module.exports.getId = getId
module.exports.authorOfBook=authorOfBook  
module.exports.bookByAuthor_id=bookByAuthor_id


