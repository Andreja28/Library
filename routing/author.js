var express = require('express')
var router = express.Router()


router.route('/')
    .get((req, res) => {
        res.send("Get author");
    })
    .post((req, res) => {
        res.send("Add author");
    })
    .put((req, res) => {
        res.send("Update author");
    })

module.exports = router