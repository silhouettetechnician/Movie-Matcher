const router = require('express').Router()
const movies = require('../controllers/movies')
const users = require('../controllers/users')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/movies')
  .get(movies.index)
  .post(movies.create)

router.route('/movies/:id')
  .get(movies.show)
  .put(secureRoute, movies.update)
  .delete(secureRoute, movies.delete)

router.get('/users', users.index)
router.get('/users/:id', users.show)

router.route('/movies/:id/comments')
  .post(secureRoute, movies.commentCreate)

router.route('/movies/:id/comments/:commentId')
  .delete(secureRoute, movies.commentDelete)
// 
// router.post('/movies/:id/comments', secureRoute, movies.commentCreate)
// router.delete('/movies/:id/comments/:commentId', secureRoute, movies.commentDelete)

router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router
