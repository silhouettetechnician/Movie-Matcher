const User = require('../models/user')

function indexUser(req, res, next){
  User
    .find()
    .populate('movie matcher user')
    .then(users => res.status(200).json(users))
    .catch(next)
}

function showUser(req, res, next){
  User
    .findById(req.params.id)
    .populate('movie matcher user')
    .then(user => res.status(200).json(user))
    .catch(next)
}

module.exports = {
  index: indexUser,
  show: showUser

}
