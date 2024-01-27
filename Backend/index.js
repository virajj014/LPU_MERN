const express = require('express')
const app = express()
const port = 8000
const dotenv = require("dotenv")
dotenv.config()
app.get('/',(req,res)=>{
    res.json({
        message : "API IS WORKING",
      
    })
})


app.get('/getuserdata',(req,res)=>{
    res.json({
        message : "USER DATA FETCHED SUCCESSFULLY",
        user:{
            name : "Harshal Jain",
            email : "hj1@gmail.com"
        },
        // testenv: process.env.TEST_ENV
    })
})

app.listen(port, ()=>{
    console.log("Server is running on port 8000")
})