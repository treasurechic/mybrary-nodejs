// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse()
// }

const express = require('express')
const app  = express()
const expresLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expresLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/mybrary', {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', error=> console.error(error))
db.once('open', () => console.log('connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)