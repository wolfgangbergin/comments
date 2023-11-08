require('./wolfgang.js')
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://127.0.0.1:27017/personApp')
  .then(() => console.log('Connected to MongoDB...🏁🏁🏁'))
  .catch((err) => console.error('Could not connect to MongoDB...🤬🤬🤬', err))

const personScheme = new mongoose.Schema({
  first: String,
  middle: String,
  last: String,
})

personScheme.virtual('fullName').get(function () {
  return `${this.first} ${this.middle} ${this.last}`
})

personScheme.pre('save', async function () {
    this.first = 'YO'
    this.last = 'MAMA'
  console.log('About to save...')
})

personScheme.pre('save', async function () {
    console.log('Just saved!!!')
  })

const Person = mongoose.model('Person', personScheme)


let tammy = new Person({
    first: 'tammy',
    middle: '212',
    last: 'chow',
  })


//   l(tammy.fullName)

//  tammy.save().then((res) => console.log(res))

