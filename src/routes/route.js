const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", AuthorController.createAuthor )

router.get("/getAuthorData", AuthorController.getAuthorData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getId",AuthorController.getId)

router.get("/authorOfBook",AuthorController.authorOfBook)

router.get('/bookByAuthor_id',AuthorController.bookByAuthor_id)
// router.get("/getAllData",AuthorController.getAllData)


 

module.exports = router;