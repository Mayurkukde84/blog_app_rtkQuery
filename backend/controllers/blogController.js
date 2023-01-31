const asyncHandler = require('express-async-handler')
const Blog = require('../models/blogSchema')

const getAllBlog = asyncHandler(async(req,res)=>{
    const blog = await Blog.find()
    console.log('first')
    res.status(200).json(blog)
})

const postBlog = asyncHandler(async(req,res)=>{
    const newBlog = await Blog.create(req.body)
    res.status(200).json(newBlog)
})

const blogDelete = asyncHandler(async(req,res)=>{
   const {id} = req.params
   console.log(req.params)
   const deleteblog = await Blog.findById(id).exec()

   const result = await deleteblog.deleteOne()

   if(result){
    return res.status(201).json({message:'user is delted'})
   }
   res.json(result)
})
const editBlog = asyncHandler(async(req,res)=>{
   const blogEdit = await Blog.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
   })

   res.status(200).json(blogEdit)
})

module.exports = {
    getAllBlog,
    postBlog,
    blogDelete,
    editBlog
    
}