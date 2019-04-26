
const Movie = require('../models/movie')

function indexMovie(req, res){
  Movie
    .find(req.query)
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
}

function showMovie(req, res){
  Movie
    .findById(req.params.id)
    .then(movie => res.status(200).json(movie))
    .catch(err => res.json(err))
}

function createMovie(req, res){
  Movie
    .create(req.body)
    .then(movies => res.status(201).json(movies))
    .catch(err => res.json(err))

}

function editMovie(req, res){
  Movie
    .findById(req.params.id)
    .then(movie => {
      if(!movie || !movie.owner || !movie.owner._id.equals(req.currentUser._id)){
        return res.json({ message: 'Unauthorized' })
      }
      Object.assign(movie, req.body)
      return movie.save()
    })
    .then(() => res.sendStatus(202))
    .catch(err => res.json(err))
}

function deleteMovie(req, res){
  Movie
    .findById(req.params.id)
    .remove()
    .then(() => res.status(202).end('Ok'))
    .catch(err => res.json(err))
}

function commentCreate(req, res){
  Movie
    .findById(req.params.id)
    .then(movie => {
      movie.comment.push(req.body)
      return movie.save()
    })
    .then(movie => res.json(movie))
    .catch(err => res.json(err))
}

function commentDelete(req, res){
  Movie
    .findById(req.params.id)
    .then(movie => {
      if(!movie || !movie.owner || !movie.owner._id.equals(req.currentUser._id)){
        return res.json({ message: 'Unauthorized'})
      }
      const comment = movie.comments.id(req.params.commentId)
      // removing the comment
      comment.remove()
      // saving the movie page
      return movie.save()
    })
    .then(movie => res.json(movie))
    .catch(err => res.json(err))
}

module.exports = {
  index: indexMovie,
  show: showMovie,
  create: createMovie,
  update: editMovie,
  delete: deleteMovie,
  commentCreate,
  commentDelete
}
