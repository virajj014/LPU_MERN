const express = require('express')
const app = express()
const port = 8000
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const User = require('./model/userModel');

dotenv.config()



require('./db.js')


app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({
        message: "API IS WORKING",

    })
})


app.get('/getuserdata', (req, res) => {
    res.json({
        message: "USER DATA FETCHED SUCCESSFULLY",
        user: {
            name: "Harshal Jain",
            email: "hj1@gmail.com"
        },
        // testenv: process.env.TEST_ENV
    })
})

app.post('/register', (req, res) => {
    // console.log(req.body)
    const { name, email, password } = req.body
    // console.log(name, email, password)

    if (!name || !email || !password) {
        res.json({
            message: "SOME FIELDS ARE MISSING"
        })
    }

    else if (password.length < 6) {
        res.json({
            message: "PASSWORD MUST BE ATLEAST 6 CHARACTERS LONG"
        })
    }


    // CHECK EMAIL


    res.json({
        message: "REGISTERED SUCCESSFULLY"
    })
})

app.listen(port, () => {
    console.log("Server is running on port 8000")
})