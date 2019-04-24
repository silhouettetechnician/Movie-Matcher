console.log('working')
module.exports = {
  port: process.env.PORT || 4000,
  db: {
    production: process.env.MONGODB_URI,
    development: 'mongod://localhost/movie-matcher',
    test: 'mongodb://localhost/movie-matcher-test'
  },
  secret: process.env.SECRET || 'we can find the perfect movie'
}
