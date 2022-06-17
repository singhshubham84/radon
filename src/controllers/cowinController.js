let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        console.log(options)
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByDistrictAndDate = async function (req, res) {
    try {
        let district = req.query.district_id
        let date = req.query.date
        // console.log(`query params are: ${district} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let londonWeather = async function (req, res) {
    try {
        let city=req.query.q
        let id =req.query.appid

        var options = {
            
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let londonWeatherOnlyTemp = async function (req, res) {
    try {

        var options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=london&appid=8645b57f72e59b85cc12a17ecd91d02b`
        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ temp: result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let cities = async function (req, res) {
    try {
        let array1 = []
        var citymumbai = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=8645b57f72e59b85cc12a17ecd91d02b`
        }
        let result1 = await axios(citymumbai)
        let data1 = { city: result1.data.name, temp: result1.data.main.temp }
        array1.push(data1)

        var citydelhi = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8645b57f72e59b85cc12a17ecd91d02b`

        }
        let result2 = await axios(citydelhi)
        let data2 = { city: result2.data.name, temp: result2.data.main.temp }
        array1.push(data2)

        var citybengaluru = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=8645b57f72e59b85cc12a17ecd91d02b`
  
        }
        let result3 = await axios(citybengaluru)
        let data3 = { city: result3.data.name, temp: result3.data.main.temp }
        array1.push(data3)

        var citykolkata = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=8645b57f72e59b85cc12a17ecd91d02b`

        }
        let result4 = await axios(citykolkata)
        let data4 = { city: result4.data.name, temp: result4.data.main.temp }
        array1.push(data4)

        var citychennai = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=8645b57f72e59b85cc12a17ecd91d02b`

        }
        let result5 = await axios(citychennai)
        let data5 = { city: result5.data.name, temp: result5.data.main.temp }
        array1.push(data5)

        var citylondon = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=london&appid=8645b57f72e59b85cc12a17ecd91d02b`

        }
        let result6 = await axios(citylondon)
        let data6 = { city: result6.data.name, temp: result6.data.main.temp }
        array1.push(data6)

        var citymoscow = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=8645b57f72e59b85cc12a17ecd91d02b`

        }
        let result7 = await axios(citymoscow)
        let data7 = { city: result7.data.name, temp: result7.data.main.temp }
        array1.push(data7)
        console.log(array1)

        let sorted= array1.sort( function(a,b){return a.temp -b.temp})
        //  array1.push(citymumbai)
        // let results = await axios(citymumbai)

        console.log(sorted)
        res.status(200).send(sorted)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities= async function(req,res){
    try{
    
    let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow","india"]

    let cityarray=[]

    for(i=0;i<cities.length;i++){
        let obj ={city:cities[i]}
        let resp =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8645b57f72e59b85cc12a17ecd91d02b`)
        obj.temp=resp.data.main.temp
        cityarray.push(obj)     
          }
          let tempsorted= cityarray.sort( function(a,b){return a.temp -b.temp})

          res.status(200).send({status:true,data:tempsorted})
    }
    catch(err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
}
}

const meme = async function (req, res) {
    try {
        // let temp = req.query.template_id
        // let text0 = req.query.text0
        // let text1=req.query.text1
        // let username=req.query.username
        // let password=req.query.password
        // console.log(`query params are: ${district} ${date}`)
        var options = {
            method: "post",
            // url: `https://api.imgflip.com/caption_image?template_id=${temp}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
            url:`https://api.imgflip.com/caption_image?template_id=61546&text0=brace yourself&text1=project is coming&username=chewie12345&password=meme@123`
        }
        let result = await axios(options)
        // console.log(result)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }



}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrictAndDate = getByDistrictAndDate
module.exports.londonWeather = londonWeather
module.exports.londonWeatherOnlyTemp = londonWeatherOnlyTemp
module.exports.cities = cities
module.exports.meme=meme
module.exports.getSortedCities=getSortedCities