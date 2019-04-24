const router = require('express').Router()
const movies = require('../controllers/movies')
const users = require('../controllers/user')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/movies')
  .get(movies.index)
  .post(movies.create)

router.route('/movies:id')
  .get(movies.show)
  .put(secureRoute, movies.update)
  .delete(movies.break)

router.get('/users', users.index)
router.get('/users/:id', users.show)
router.delete('/users:id', secureRoute, users.break)

router.post('/register', auth.register)
router.post('/login', auth.login)

router.post('/movies/:id/comments', secureRoute, movies.commentCreate)
router.delete('/movies/:id/comments/:commentId', secureRoute, movies.commentDelete)
