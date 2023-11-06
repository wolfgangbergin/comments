require('./wolfgang.js')
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://127.0.0.1:27017/moviesDb')
  .then(() => console.log('Connected to MongoDB...🏁🏁🏁'))
  .catch((err) => console.error('Could not connect to MongoDB...🤬🤬🤬', err))

const movieScheme = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
  rating: Number,
  actors: [String],
  // wolf: Object,
})

const Movie = mongoose.model('Movie', movieScheme)

// const wolf = new Movie({ title: 'The Wolf of Wall Street', genre: 'Comedy', year: 2013, rating: 8.2, actors: ['Leonardo DiCaprio', 'Jonah Hill', 'Margot Robbie'] })


// const kimbo = new Movie({ title: 'kimbo', genre: 'Comedy', year: 2013, rating: 8.2, actors: ['kimbo', ] })
// const kim1 = new Movie({ title: 'kim1', genre: 'Comedy', year: 2013, rating: 8.313,  })

//  Movie.insertMany([wolf, kimbo, kim1]).then((res) =>{l('It worked'), console.log(res)})
