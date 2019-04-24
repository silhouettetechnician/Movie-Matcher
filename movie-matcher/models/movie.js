const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  description: {type: String, required: true},
  releaseYear: {type: String, required: true},
  comments: [{body: String, date: Date}],
  date: {type: Date, default: Date.now()}
},{
  timestamps: true
})

module.exports = mongoose.model('Movies', movieSchema)
