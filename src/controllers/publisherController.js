const publisherModel=require("../models/publisherModel")

const createPublisher =async function(req,res){
    let publisher  =req.body
    let publishercreated =await publisherModel.create(publisher)
    res.send({data:publishercreated})

}
module.exports.createPublisher=createPublisher