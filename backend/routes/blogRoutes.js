const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
router.route('/getall').get(blogController.getAllBlog)
router.route('/post').post(blogController.postBlog)

module.exports = router