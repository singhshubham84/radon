const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let data =req.body
    let authorId =req.body.authorId
    let  publisherId =req.body.publisherId
    // console.log(authorId);
    // console.log(publisherId);
//problem 3a
    if(!authorId){
        return res.send({error:"publisher ID is required"})
    }
//problem 3b
    let checkAuthor = await authorModel.findById(authorId)
    if(!checkAuthor){
        return res.send({error:"this author ID is not valid"})  
    }
//problem 3c
    if(!publisherId){
        return res.send({error:"publisher ID is required"})
    }

//problem 3d
    let checkPublisher = await publisherModel.findById(publisherId)
    if(!checkPublisher){
        return res.send({error:"this publisher ID is not valid"})
    }
//result
    let savedata = await bookModel.create(data)
          res.send({data:savedata})
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}


    // 3rd problem 1----------------------------------------------------------------------------------
    //    let id =req.body.authorId
    //    console.log(id)
    // if(id){
    // let specificBook = await bookModel.find().populate('authorId')
    //  res.send({data: specificBook}) 
    //  }
    // else{
    //     // console.log("this detail is required")
    //     res.send("this detail is required")
    // }
    //3rdproblem 2 -------------------------------------------------------------------------------------
        // let id = req.body.authorId
        // console.log(id)
    
        // let id2= await authorModel.find().select("_id")
        // let id3=id2.toString()
        // console.log(id2)
       



    //3rd problem 3----------------------------------------------------------------------------------------
    // let id = req.body.publisherId
    // console.log(id)
    // if (id) {
    //     let specificBook = await bookModel.find().populate("publisherId")
    //     res.send({ data: specificBook })
    // }
    // else {
    //     // console.log("this detail is required")
    //     res.send("this detail is required")
    // }


    //4th problem------------------------------------------------------------------------------------------
    const getBooksWithAuthorDetails = async function (req, res) {
        
    let specificBook = await bookModel.find().populate('authorId').populate('publisherId')

    res.send({data: specificBook})
}


//problem 5-B
const updaterating= async function(req,res){
         let data =   await bookModel.updateMany({rating:{$gt:3.5}},{$inc:{price:10}},{new:true})
    //    console.log(data)
       res.send({update:data})
}
//problem 5-A
// const updatepublisher =async function(req,res){
//     let data = await bookModel.updateMany({publisher:{$eq:"Penguin" }},{})
// }


module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updaterating=updaterating
