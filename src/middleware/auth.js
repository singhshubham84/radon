const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    try{
    let token = req.headers["x-Auth-token"];

    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ status: false, msg: "token must be present" });
    
    let decodedToken = jwt.verify(token, "functionup-thorium");
    
    console.log(decodedToken)
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }
    next()}
    catch(err){
      res.status(500).send({msg:"error",error: err.message})
    }
}

const authorise =async function(req, res, next) {
  try{
    let token = req.headers["x-auth-token"]
   
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId
    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
     
    let user = await userModel.findById(req.params.userId)
    // console.log(user)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    next()}
    catch(err){
      req.status(500).send({msg:"error",error:err.message})
    }
}
module.exports.authenticate=authenticate
module.exports.authorise=authorise