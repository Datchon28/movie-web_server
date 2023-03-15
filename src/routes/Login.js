const express = require('express')
const router = express.Router()

const Accounts = require('../controller/AccountsController.js')


router.use('/', Accounts.Login)


module.exports =  router