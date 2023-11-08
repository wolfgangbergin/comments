require('./wolfgang.js')
const mongoose = require('mongoose')
mongoose
  .connect('mongodb://127.0.0.1:27017/shopApp')
  .then(() => console.log('Connected to MongoDB...🏁🏁🏁'))
  .catch((err) => console.error('Could not connect to MongoDB...🤬🤬🤬', err))

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
    max: [1000, '🤬💥🤬💥🤬'],
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
  console.log(`hello 🤗 - from ${this.name}`)
  return this
}

const Product = mongoose.model('Product', productScheme)

let wolf = new Product({
  name: 'wolfgang',
  price: 8.2,
  categories: ['Comedy'],
})

wolf.save()

// findProduct()

const kimbo = Product.findOne({
  name: 'wolfgang',
})

// d(wolf)
// wolf.greet()

const findProduct = function () {
  Product.findOne({
    name: 'wolfgang',
  }).then((res) => res.greet())
}

findProduct()
