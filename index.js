var express = require('express')
var userRoutes = require('./routing/users')
var bookRoutes = require("./routing/book")
var authorRoutes = require("./routing/author")
var app = express()
var port = 5000;

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send("There was an error.")
})
app.use(express.json())

app.use('/user', userRoutes)
app.use('/author', authorRoutes)
app.use('/book', bookRoutes)

app.get('/', (req, res)=>{
    res.send("Hello world.")
})


app.listen(port, ()=>{
    console.log(`example app listening at port ${port}`)
})
