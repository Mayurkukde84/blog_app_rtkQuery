const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"pls fill title field"]
    },
    blogPost:{
        type:String,
        required:[true,"pls fill post field"]
    }
})

module.exports  = mongoose.model('Blog',blogSchema)