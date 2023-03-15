
const SignUp = require('../module/SignUp.js')

class Accounts {
    
    async signUp(req, res, next) {

        const user = new SignUp({
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            userPassword: req.body.userPassword,
            first_Name: req.body.first_Name,
            last_Name: req.body.last_Name,
            Gender: req.body.Gender,
            userBirhDay: req.body.userBirhDay,
            userAddress: req.body.userAddress,
            userCity:  req.body.userCity,
            userContact:  req.body.userContact,
            favourite_Movie: req.body.favourite_Movie
        
          })
          try {
              await user.save()
              // response.send(user)
              res.json(user)
              console.log(req.body);
            res.status(200).send(req.body);
        
          } catch (error) {
              console.log(err);
              res.status(500).send(error);
              next()
          }
        
  }

   Login(req, res, next) {
    SignUp.find({})
    .then(data => res.json(data))
    .catch(next)
  }
    
}

module.exports = new Accounts;