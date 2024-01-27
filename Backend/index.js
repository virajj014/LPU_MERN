const express = require('express')
const app = express()
const port = 8000
const dotenv = require("dotenv")
const bodyParser = require('body-parser');
const User = require('./model/userModel');
const bcrypt = require('bcrypt');

dotenv.config()



require('./db.js')


app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({
        message: "API IS WORKING",

    })
})


app.get('/getuserdata/:email', async (req, res) => {
    const email = req.params.email

    let user = await User.findOne({ email: email }).select('-password')

    if (!user) {
        return res.json({
            message: "USER DOESN'T EXISTS"
        })

    }

    res.json({
        message: "USER FOUND",
        data: user
    })
})

app.post('/register', async (req, res) => {
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



    const user = await User.findOne({ email: email })

    if (user) {
        return res.json({
            message: "USER ALREADY EXISTS"
        })
    }


    const newuser = new User({
        name,
        email,
        password
    })

    await newuser.save()

    res.json({
        message: "REGISTERED SUCCESSFULLY"
    })
})


app.post('/login', async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    // console.log(name, email, password)

    if (!email || !password) {
        res.json({
            message: "SOME FIELDS ARE MISSING"
        })
    }

    else if (password.length < 6) {
        res.json({
            message: "PASSWORD MUST BE ATLEAST 6 CHARACTERS LONG"
        })
    }


    // CHECK EMAIL APPLICATION LATER
    const user = await User.findOne({ email: email })

    if (!user) {
        return res.json({
            message: "USER DOESN'T EXISTS"
        })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.json({
            message: "INVALID CREDENTIALS"
        })
    }

    res.json({
        message: "LOGGED IN SUCCESSFULLY"
    })

})
app.listen(port, () => {
    console.log("Server is running on port 8000")
})