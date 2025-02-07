const express = require('express');
const app = express();
const dotenv = require("dotenv").config();
const connection = require('./Connection/connection')
const bookRoute = require('./Routes/bookRoutes')
const bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post('/add',bookRoute);

app.get('/getbooks',bookRoute);
app.get('/getbooks/:id',bookRoute);

app.put('/updateBook/:id',bookRoute)

app.delete('/deleteBook/:id',bookRoute)

app.get('/',(req,res)=>{
    res.send('hello')
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})
