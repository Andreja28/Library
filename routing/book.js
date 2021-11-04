var express = require('express')
var router = express.Router()


router.route('/')
    .get((req, res) => {
        res.send("Get book");
    })
    .post((req, res) => {
        res.send("Add book");
    })
    .put((req, res) => {
        res.send("Update book");
    })
    .delete((req, res) => {
        res.send("Delete book")
    })

module.exports = router