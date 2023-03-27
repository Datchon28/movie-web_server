const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SignUp = new Schema({
    userName: { type: String, default: 'username' },
    first_Name: { type: String, },
    last_Name: { type: String,  },
    userEmail: { type: String, default: 'email' },
    userPassword: { type: String, minLenght: 18 },
    Gender: {type: String, default: 'none'},
    userBirhDay: {type: Date, default:'none'},
    userAddress: {type: String, default: 'none'},
    userCity:  {type: String, default: 'none'},
    userContact:  {type: Number, default: 'none'},
    favourite_Movie: {type: Array, default: null},
    createAt: { type: Date, default: Date.now }

}, );

module.exports = mongoose.model('accounts', SignUp);