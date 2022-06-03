const express = require('express');
const externalModule = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});



    router.get('/sol1',function(req,res)
{
    let arr=[1,2,3,5,6,7]
    let item=arr[0]
    let n=0
    for(let i=0;i<arr.length+1;i++)
    
        if(arr[i]==item){
            item++
        }else{
            missingNumber=item
        }
    
    // const sumOfTheArray=(n*(n+1))/2-missingNumber
    console.log(missingNumber)
    res.send({missingNumber});
});
router.get('/sol2',function(req,res)
{
    let arr=[33,34,35,37,38]
    let item=arr[0]
    let n=0
    for(let i=0;i<arr.length+1;i++)
    
        if(arr[i]==item){
            item++
        }else{
            missingNumber=item
        }
    
    // const sumOfTheArray=(n*(n+1))/2-missingNumber  
    console.log(missingNumber)
    res.send({missingNumber});
});

module.exports = router;
// adding this comment for no reason