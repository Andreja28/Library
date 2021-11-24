var express = require("express")
var config = require("./config")
var bookRoutes = require('./routes/books')
var authRoutes = require('./routes/auth')

//var passport = require('passport')
var passport = require('./routes/config/passport')

var app = express()

var mongoose = require("mongoose")
mongoose.connect(config.dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})

// console.log(mongoose.connection)

app.use(express.json())
app.use(passport.initialize())
app.use((err, req, res, next)=>{
    console.log(err.stack)
    res.status(500).send("There was an error.")
})

app.use('/books',bookRoutes)
app.use('/auth',authRoutes)

app.get('/',(req, res) =>{
    
    res.send("Hello world.")
})

app.listen(config.port, () => {
    console.log(`Running on port: ${config.port}`)
})
