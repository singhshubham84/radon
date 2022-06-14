// const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkToken = async function (req, res,next) {
    let token1 = req.headers["x-Auth-token"];
    if (!token1) token1 = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token1) return res.send({ status: false, msg: "token must be present" });
   
    next()
}


const CheckUserId =async function(req,res,next){

let userId = req.params.userId;
let userDetails = await userModel.findById(userId);
if (!userDetails)
  return res.send({ status: false, msg: "No such user exists" });

res.send({ status: true, data: userDetails });
next()
}
module.exports.checkToken=checkToken
module.exports.CheckUserId=CheckUserId