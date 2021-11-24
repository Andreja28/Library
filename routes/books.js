var express = require('express')
var jwt = require('express-jwt')
var Book = require('../models/book')
var passport = require('./config/passport')

var router = express.Router()


router.get("/", 
    passport.authenticate('jwt', {session:false}),
    async (req, res, next)=>
    { 
        var books = await Book.find()
        res.send(books)
    }
)

router.post("/",
    passport.authenticate('jwt', {session:false}),
    passport.authorizeRoles('ADMIN'),
    (req, res)=>{
        res.send(Book.sacuvaj(req.body))
    }
)

router.put("/", (req, res)=>{
    res.send("Update existing book.")
})

router.delete("/", (req, res)=>{
    res.send("Delete book.")
})

module.exports = router