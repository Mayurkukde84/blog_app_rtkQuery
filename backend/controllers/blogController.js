const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogSchema')

const getAllBlog = asyncHandler(async(req,res)=>{
    const blog = await Blog.find()
    res.status(200).json(blog)
})

const postBlog = asyncHandler(async(req,res)=>{
    const newBlog = await Blog.create(req.body)
    res.status(200).json(newBlog)
})

module.exports = {
    getAllBlog,
    postBlog
}