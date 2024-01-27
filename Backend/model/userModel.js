const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: 0
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('User', userSchema)