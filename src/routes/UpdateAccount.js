const express = require('express')
const router = express.Router()

const Accounts = require('../controller/AccountsController.js')


router.put('/', Accounts.UpdateInfo)


module.exports =  router