const express = require('express')
const morgan = require('morgan')
const fs = require('fs-extra')
const path = require('path')

const staticRoutes = require('./StaticAppVersion/routes/homeRoute')
const otherStRoutes = require('./StaticAppVersion/routes/otherRoute')


const app = express() //application
//pug
app.set('view engine', 'pug')
app.set('views', __dirname + '/StaticAppVersion/views')
app.use(express.static(__dirname + '/public')) //public 


//connection logs
// let accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
//setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))
// app.use(morgan('dev'))




//app.get('/', (req,res) => {res.status(200).json({messge:" It's alive!"})})
app.get('/', staticRoutes)
app.get('/home', staticRoutes)
app.get('/test', staticRoutes)
app.get('/about', otherStRoutes)
app.get('/sudoku', otherStRoutes)



module.exports = app;