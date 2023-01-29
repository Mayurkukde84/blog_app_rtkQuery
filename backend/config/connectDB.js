const mongoose = require('mongoose')

const connectDb = ()=>{
    try {
         mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb