const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    id:{
        type:String
    },
    title:{
        type:String,
        required:[true,"pls fill title field"]
    },
    blogPost:{
        type:String,
    
    }
})

module.exports  = mongoose.model('Blog',blogSchema)