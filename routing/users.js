var express = require('express')
var router = express.Router()


router.route('/')
    .get((req, res) => {
        res.send("Get user");
    })
    .post((req, res) => {
        res.send("Add user");
    })
    .put((req, res) => {
        res.send("Update user");
    })

router.get('/:userId', function (req, res) {
        res.send(req.params)
})

router.post('/add', function (req, res) {
    res.send(req.body)
})

module.exports = router