const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')	
const api = require('./server/routes/api')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/CRM", { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(express.static(path.join(__dirname, 'build')))
app.use('/', api)

const port = 3001

;

app.listen(port, function(){
    console.log('server is running')
})
