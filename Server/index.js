const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
cors.origin = 'http://localhost:3000';

app.use(bodyParser.json());

//importing routes
const movies = require('./routes/movies');
app.use('/recommend',movies);



//server running on port 5000
app.listen(5000,(req,res)=>{
    console.log('Server is running on port 5000');
})