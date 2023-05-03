const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./src/db/index.js')
const SignUp = require('./src/routes/SignUp.js')
const UpdateAccount = require('./src/routes/UpdateAccount.js')
const Login = require('./src/routes/Login.js')
const Favorite = require('./src/routes/Favourite.js')

const app = express()
const port = process.env.PORT || 5003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cors())

app.use(express.static('public'))
db.connect()

app.use('/login', Login)
app.use('/signup', SignUp);
app.use('/update-account', UpdateAccount);
app.use('/favourite/:option', Favorite);


app.listen(port, () => {
    console.log(`Run in localhost:${port}`)
  })

module.exports = app;