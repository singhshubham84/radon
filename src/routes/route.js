const express = require('express');
const router = express.Router();
let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]

// router.post('/player', function (req, res) {
//     for (i = 0; i < 3; i++) {
//         let a = req.body.name
//         let b = players[i].name
//         if (a == b) {


//             res.send({ data: players, status: true })
//         }
//         else {
//             let c = req.body
//             players.push(c)
//             res.send({ data: players, status: true })
//         }

//     }
// })
router.post('/players', function (req, res) {

    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});



router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random", function (req, res) {
    res.send("hi there")
})

router.get("/test-api", function (req, res) {
    res.send("hi FunctionUp")
})

router.get("/test-api-6", function (req, res) {
    res.send({ a: 56, b: 45 })
})

router.post("/test-post", function (req, res) {
    res.send([23, 45, 6])
})

router.post("/test-post-2", function (req, res) {
    res.send({ msg: "hi", status: true })
})

router.post("/test-post-3", function (req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log(req.body)

    res.send({ msg: "hi", status: true })
})


router.post('/test-post-4', function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body
    arr.push(ele)
    console.log("hiiiiiiii")
    res.send({ msg: arr, status: true })
})

module.exports = router;