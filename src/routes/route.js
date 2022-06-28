const express = require('express');
const router = express.Router();
const AuthorController = require("../controller/AuthorController")
const BlogController = require('../controller/blogController')
const middlewareAuth = require('../middleware/auth')
const middlewareValidate = require('../middleware/validate')


router.post('/authors', middlewareValidate.validatecreate, AuthorController.createAuthor)

router.post('/blogs', middlewareAuth.authentication, middlewareValidate.validateblog, BlogController.createBlog)

router.get('/blogs', middlewareAuth.authentication, middlewareAuth.authorization, middlewareValidate.validateByQuery, BlogController.getblog)

router.put('/blogs/:blogId', middlewareAuth.authentication, middlewareAuth.authorization, BlogController.updateblog)

router.delete('/blogs/:blogId', middlewareAuth.authentication, middlewareAuth.authorization, BlogController.deleteById)

router.delete('/blogs', middlewareAuth.authentication, middlewareValidate.validateByQuery, BlogController.deleteBlogByquery)

router.post('/login', middlewareValidate.validateLogin, AuthorController.loginAuthor)



module.exports = router;