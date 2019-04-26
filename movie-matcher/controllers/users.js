const User = require('../models/user')

function indexUser(req, res, next){
  User
    .find()
    .populate('movie matcher user')
    .then(users => res.status(200).json(users))
    .catch(err => console.log(err))
}

function showUser(req, res, next){
  User
    .findById(req.params.id)
    .populate('movie matcher user')
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err))
}

module.exports = {
  index: indexUser,
  show: showUser

}
