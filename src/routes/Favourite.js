const express = require('express')
const router = express.Router()

const Accounts = require('../controller/AccountsController.js')


router.put('/:add', Accounts.AddToFavourite)
router.put('/:delete', Accounts.DeleteMovieInFavourite)


module.exports =  router