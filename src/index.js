const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose')

const app = express();

app.use(bodyParser.json());                             //middleware for parsing json objects into JS-accessible variables


mongoose.connect("mongodb+srv://shubhamsingh:ZqIuucMGucAIGAIa@cluster0.3t74x.mongodb.net/project-2")
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
})
