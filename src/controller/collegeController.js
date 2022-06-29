const collegeModel = require('../model/collegeModel')
const internModel = require('../model/internModel')

const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) {
        return false
    }
    if (typeof value === 'string' && value.trim().length == 0) {
        return false
    }
    return true
}
const isValidRequestBody = function (request) {
    return Object.keys(request).length > 0
}
const nameRegex = /^([a-zA-Z]+)$/
// const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/ // -------------


const createCollege = async function (req, res) {
    try {
        const collegeData = req.body
        if (!isValidRequestBody(collegeData)) {
            return res.status(400).send({ status: false, message: "No data is provided" })
        }
        const { name, fullName, logoLink } = collegeData
        if (!isValid(name)) return res.status(400).send({ status: false, message: "college name is required" })
        if (!nameRegex.test(name)) return res.status(400).send({ status: false, message: "college name should be in alphabets only" })

        if (!isValid(fullName)) return res.status(400).send({ status: false, message: "college full name is required" })
        // if (!nameRegex.test(fullName)) return res.status(400).send({ status: false, message: "college full name should be in alphabets only" })

        if (!isValid(logoLink)) return res.status(400).send({ status: false, message: "logo link is required" })
        // if (!urlRegex(logoLink)) return res.status(400).send({ status: false, message: "logo link is invalid" })

        const findCollegeName = await collegeModel.findOne({name})
        if (findCollegeName) return res.status(400).send({ status: false, message: `${name} is already registered` })

        const newCollege = await collegeModel.create(collegeData)
        res.status(201).send({ status: true, message: "college created succesfully", data: newCollege })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }
}

const getCollegeDetails = async function (req,res){
    let CollegeName = req.query

    if (!isValidRequestBody(CollegeName)) {
        return res.status(400).send({ status: false, message: "please provide college name" })}

        const getCollegeDetails=await collegeModel.findOne({name:CollegeName,isDeleted:false})

        if(!getCollegeDetails) return res.status(404).send({status:false,message:"no college found with this college name please provide correct college name"} )

        const collegeId=getCollegeDetails._id

        const findItern= await internModel({collegeId:collegeId,isDeleted:false}).select({name:1,email:1,mobile:1})

        


}


module.exports.createCollege = createCollege