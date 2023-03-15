const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb://localhost:27017/movie_web', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conneted'))
    .catch(error => console.log(error))
}

module.exports = { connect }