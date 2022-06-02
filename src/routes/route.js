const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const _ =require('lodash')

const router = express.Router();

router.get('/hello', function (req, res) {
    //problem 4/1
   let array = [1,2,3,5,3,1,3,3,8,9,6,7]
   console.log(_.chunk(array,4))


   //problem 4/2
   let odd =[1,3,5,7,9,11,13,15,17,19]
   console.log(_.tail(odd))
   //problem 4/3
   let a=[1,85,33,4,6,2,5]
   let b=[2,6,3,8,9,87,9]
   let c=[5,3,9,7,666,58,8]
   let d=[25,3,6,9,7,8,5]
   let e=[6,8,39,3,6,4,5]
   console.log(_.union(a,b,c,d,e))
   //problem 4/5

  let pairs=[
    ['horror','The Shining'],
    ["drama","Titanic"],
    ["thriller","Shutter Island"],
    ["fantas","Pans Labyrinth"]
  ]
  
console.log(_.fromPairs(pairs))


    res.send('Hello there!')
});


router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});



router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

//problem 1
router.get('/movies',function(req, res) {
    
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']  

    
    res.send(movies)
})
//problem 2 and
router.get('/movies/:indexNumber',function(req, res) {
   
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    if(req.params.indexNumber<4) { 
    console.log(movies[req.params.indexNumber])
    res.send(movies[req.params.indexNumber])}
    else{
        console.log("invalid movie not available")// for terminal
        res.send("invalid movie not available") // for front end
    }
})
//problem 4
router.get('/films',function(req,res){
     let films =[{id:1,name:"KGF"},
                 {id:2,name:"RRR"},
                {id:3 ,name:"don"},
                {id:4,name:"hulk"}]

     
       res.send(films)
       
})
//problem 5
router.get('/films/:filmId',function(req,res){

    let films =[{id:1,name:"KGF"},
                {id:2,name:"RRR"},
               {id:3 ,name:"don"},
               {id:4,name:"hulk"}]

       if(req.params.filmId<4) {        
        
        console.log(films[req.params.filmId])  
        res.send(films[req.params.filmId])   
       }
       else{
          console.log('No movie exists with this id')// for terminal
          res.send('No movie exists with this id') // for  front end

       }
        })


module.exports = router;
// adding this comment for no reason