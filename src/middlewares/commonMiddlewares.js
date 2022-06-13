const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const mid1 = function (req, res, next) {
    req.falana = "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const checkIsfreeappuser = function (req, res, next) {
    if (req.headers.isfreeappuser) {
        next();
    } else {
        res.send({ msg: "request is missing" })
    }

    // console.log("Hi I am a middleware named Mid2")
    // next()
}

const validation = async function (req, res, next) {
    let userId = req.body.userId
    let productId = req.body.productId

    if (!productId) {
        return console.log("product id is missing")
    }
    if (!userId) {
        return console.log("userid is misssing")
    }

    let checkUser = await userModel.findById(userId)

    if (!checkUser) {
        return console.log("userid is not valid")
    }
    let checkProduct = await productModel.findById(productId)
    if (!checkProduct) {
        return res.send("productid is not valid ")
    }

    next()
}


       





    





module.exports.mid1 = mid1
module.exports.checkIsfreeappuser=checkIsfreeappuser
module.exports.validation = validation
// module.exports.paidAppUser = paidAppUser
