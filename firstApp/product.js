require('./wolfgang.js')
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() =>
    console.log('Connected to MongoDB...🏁🏁🏁')
  )
  .catch((err) =>
    console.error(
      'Could not connect to MongoDB...🤬🤬🤬',
      err
    )
  )

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: [1000, '🤬💥🤬💥🤬' ],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: [
      {
        type: String,
        required: true,
        maxlength: 19,
      },
    ],
    default: ['Cycling'],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: ['S', 'M', 'L', 'XL'],
    default: 'XL',
  },
})


productScheme.methods.greet = function () {
  console.log('Hello')
  // console.log(`- from ${this.name}`)
  // return this
}


const Product = mongoose.model(
  'Product',
  productScheme
)

// const bike = new Product({
//   name: 'tire pump',
//   price: 29.99,
  // categories: ['Cycling', 'Safety', 'Bike Helment'],
// })

// bike
//   .save()
//   .then((data) => console.log('It worked', data))
//   .catch((err) =>
//     console.log('Error', err.errors)
//   )
///////////////////////////////////////////////

///////////////////////////////////////////////

// Product.findOneAndUpdate(
//   { name: 'tire pump' },
//   { size: 'XXL' },
//   {
//     new: true,
//     runValidators: true
//   }
// )
//   .then((data) => console.log('It worked', data))
//   .catch((err) =>
//     console.log('Error', err.errors)
//   )


