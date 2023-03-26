const express = require('express')
const router = express.Router()

const Accounts = require('../controller/AccountsController.js')


router.use('/:add', Accounts.AddToFavourite)
router.use('/:delete', Accounts.DeleteMovieInFavourite)


module.exports =  router