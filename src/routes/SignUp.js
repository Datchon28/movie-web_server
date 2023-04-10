const express = require('express')
const router = express.Router()

const Accounts = require('../controller/AccountsController.js')


router.post('/', Accounts.signUp)


module.exports =  router