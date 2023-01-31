const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')
router.route('/getall').get(blogController.getAllBlog)
router.route('/post').post(blogController.postBlog)
router.route('/blogdelete/:id').delete(blogController.blogDelete)
router.route('/blogupdate/:id').patch(blogController.editBlog)
module.exports = router