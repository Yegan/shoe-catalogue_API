const express = require('express')
const app = express()
const flash = require('express-flash')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const services  = require('./services')
const shoeDOMFunc = require('./public/domFunc')
const shoeRoutes = require('./routes/routes.js')
const postgres = require('pg')
const Pool = postgres.Pool

const connectionString = process.env.DATABASE_URL || 'postgres://coder:pg123@localhost:5432/shoe_db'

const pool = new Pool({
  connectionString
})


const shoeFunc = services(pool)
const shoeServices = shoeRoutes(shoeFunc)

// Handlebar engine allowing for templating of data

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  
  }))
  // initialise the flash middleware
  app.use(flash())
  app.use(bodyParser.json())
  app.set('view engine', 'handlebars')
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  // initialise session middleware - flash-express depends on it
  app.use(session({
    secret: '<add a secret string here>',
    resave: false,
    saveUninitialized: true
  }))


app.get('',shoeServices.home)


let PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('App starting on port', PORT)
})