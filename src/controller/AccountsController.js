
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
              res.json(user)
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

  // async UpdateInfo(req, res, next) {
  //   const update = await SignUp.updateOne({ userName: req.body.userName }, {
  //     $set: {
  //       userAddress: req.body.userAddress
  //     }
  //   })
  //   try {
      
  //     res.json(update)
  //     res.status(200).send(req.body);
  //     console.log(update);
  //   } catch (error) {
  //     console.log(err);
  //     res.status(500).send(error);
  //       next()
  //   }
  // }
    
}

module.exports = new Accounts;