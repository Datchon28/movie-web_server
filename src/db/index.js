const mongoose = require('mongoose');

async function connect() {
    try {
       await mongoose.connect('mongodb+srv://datchon28:nguyenhathu99@website.egy89kn.mongodb.net/movie_web?authSource=+website&authMechanism=SCRAM-SHA-1', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => console.log('Conneted success'))
    } catch (error) {
        console.log(error);
    }
   
    
}

module.exports = { connect }