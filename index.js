const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const db = require('./src/db/index.js')
const SignUp = require('./src/routes/SignUp.js')
// const UpdateAccount = require('./src/routes/UpdateAccount.js')
const Login = require('./src/routes/Login.js')

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(cors())

db.connect()

app.get('/login', Login)
app.post('/signup', SignUp);
// app.post('/update-account', UpdateAccount);


app.listen(port, () => {
    console.log(`Run in localhost:${port}`)
  })