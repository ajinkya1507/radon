const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    console.log(" my value is "+myHelper.endpoint)
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
   const arr1 = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']
   const chunk = lodash.chunk(arr1,3)
   console.log(chunk)

   const arr2 = [1,3,5,7,9,11,13,15,17,19]
   const tail = lodash.tail(arr2)
   console.log(" the 9 left odd numbers are "+ tail)

   const ar1 = [1,2]
   const ar2 = [2,3,1]
   const union = lodash.union(ar1,ar2)
   console.log(" merged and united arrray is " + union)

    res.send('Hello there!')

    const arr3 = [["horror","The Shining"],["drama","Titanic"],["thriller","shutter island"],["fantasy","pan labyrinth"]]
    const pairs = lodash.fromPairs(arr3)
    console.log(pairs)
});

//router.get('/candidates', function(req, res){
    //console.log('Query paramters for this request are '+JSON.stringify(req.query))
    //let gender = req.query.gender
    //let state = req.query.state
    //let district = req.query.district
    //console.log('State is '+state)
    //console.log('Gender is '+gender)
    //console.log('District is '+district)
    ////let candidates = ['Akash','Suman']
    //res.send(candidates)
//})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


router.get('/movies', function (req,res){
    let movies = ["The dark knight","inception","tenet","the prestige","interstellar"]
    res.send(movies)
})

router.get('/movies/:indexNumber', function (req,res){
    let movies = ["The dark knight","inception","tenet","the prestige","interstellar"]
    if(req.params.indexNumber>4){
        res.send("error invalid index number enter number betweent 0 to 4")
    }else{
        res.send(movies[req.params.indexNumber])
    }
     
})

router.get('/films', function (req,res){
    let films = [{
        "id":1,
        "name":"the shining"
    },{
        "id":2,
        "name": "Incendies"
    },{
        "id":3,
        "name" : "Rang de Basanti"
    },{
        "id":4,
        "name" : "Finding Nemo"
    
      }
    ]
    res.send(films)
})

router.get('/films/:filmId', function (req,res){
    let films = [{
        "id":1,
        "name":"the shining"
    },{
        "id":2,
        "name": "Incendies"
    },{
        "id":3,
        "name" : "Rang de Basanti"
    },{
        "id":4,
        "name" : "Finding Nemo"
    
      }
    ]
if(req.params.films <4 && req.params.files === 0){
    res.send("enter valid id that is between 1 to 4")
}else{
    res.send(films[req.params.filmId-1])
}
  
   
})








module.exports = router;
// adding this comment for no reason