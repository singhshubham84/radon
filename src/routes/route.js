const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookModel = require('../models/bookModel.js')
const BookController = require('../controllers/bookController')


// for create player and call data
router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)

// assignment book
router.post("/createBook", BookController.createBook)
router.get("/getBooksData", BookController.getBooksData)

module.exports = router;
 