const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config()


const MONGO_URL =   process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME


mongoose.connect(MONGO_URL,{
    dbName : DB_NAME
}).then(
    ()=>{
        console.log("DATABASE CONNECTED")
    }
).catch((err)=>{
    console.log("ERROR IN CONNECTING DATABASE ",err)
})