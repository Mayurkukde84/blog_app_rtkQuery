const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
router.route('/allpost').get(blogController.getAllBlog)
router.route('/').post(blogController.postBlog)

module.exports = router