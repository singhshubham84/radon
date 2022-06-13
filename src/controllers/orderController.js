const { count } = require("console")
const orderModel= require("../models/orderModel")
const userModel = require("../models/userModel")

const createorder= async function (req, res) {
    let data = req.body

    let checkIsfreeappuser = req.headers.isfreeappuser
   
    let balancedata = await userModel.find({name:"Sabiha Khan"}).select({balance:1,_id:0})
     let finalbalance =balancedata[0]
    

    
    if(finalbalance.balance>=100 && checkIsfreeappuser==="false"){
        let data1= await userModel.findOneAndUpdate({balance:100 },{balance:0},{new:true})
        
        let orderData= await orderModel.create(data)
      return res.send({data: orderData})    
    } 

  
    if(checkIsfreeappuser==="true"){
       let savedData= await orderModel.create(data)
       return res.send({data: savedData})
    }

    
    if(finalbalance.balance<100){
        return  res.send("balance insufficient")
      } 
  
}

module.exports.createorder= createorder
