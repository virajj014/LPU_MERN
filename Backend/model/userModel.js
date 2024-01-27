const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


// rasfasdfgasd

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

userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next();
})



module.exports = mongoose.model('User', userSchema)


// "12"