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
const urlRegex =(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%.\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%\+.~#?&//=]*)/g)


const createCollege = async function (req, res) {
    try {
        const collegeData = req.body

        if (!isValidRequestBody(collegeData)) {
            return res.status(400).send({ status: false, message: "No data is provided" })
        }  // check any data provided by user in query or not

        const { name, fullName, logoLink } = collegeData // extract

        if (!isValid(name)) return res.status(400).send({ status: false, message: "college name is required" })
        // check college name provided or not
        if (!nameRegex.test(name)) return res.status(400).send({ status: false, message: "college name should be in alphabets only" })
        // check name validation
        if (!isValid(fullName)) return res.status(400).send({ status: false, message: "college full name is required" })
        // check college full name provided or not

        if (!isValid(logoLink)) return res.status(400).send({ status: false, message: "logo link is required" })
        // check logoLinnk provided or not
        if (!urlRegex.test(logoLink)) return res.status(400).send({ status: false, message: "logo link is invalid" })
        // validate logoLink

        const findCollegeName = await collegeModel.findOne({ name })
        if (findCollegeName) return res.status(400).send({ status: false, message: `${name} is already registered` })
        // check college already resitered or not
        const newCollege = await collegeModel.create(collegeData)  // created college data
        res.status(201).send({ status: true, message: "college created succesfully", data: newCollege })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }
}

const getCollegeDetails = async function (req, res) {
    try {
        let data = req.query

        if (!isValidRequestBody(data)) {
            return res.status(400).send({ status: false, message: "please provide college name" })
        }

        let CollegeName = req.query.collegeName  // take college name from query 

        const getCollegeDetail = await collegeModel.findOne({ name: CollegeName, isDeleted: false }) // find the college details of that perticular name
    
        if (!getCollegeDetail) return res.status(404).send({ status: false, message: "no college found with this college name please provide correct college name" })

        const collegeId = getCollegeDetail._id

        const findInterns = await internModel.find({ collegeId: collegeId, isDeleted: false }).select({ name: 1, email: 1, mobile: 1 })
              // find all the interns whose link with collegeId
        if(findInterns.length==0) return res.status(404).send({status:false,message :"No intern enrolled with this college" })


        let saveData = {
            name: getCollegeDetail.name,
            fullName: getCollegeDetail.fullName,
            logoLink: getCollegeDetail.logoLink,
            interns: findInterns
        }

        res.status(200).send({ status: true, message: "college interns details", data: saveData })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })

    }
}


module.exports.createCollege = createCollege
module.exports.getCollegeDetails = getCollegeDetails
