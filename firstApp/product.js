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
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
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
    enum: ['S', 'M', 'L'],
  },
})

const Product = mongoose.model('Product', productScheme)

const bike = new Product({  price: 599, categories: ['Cycling', 'Safety'], size: 'S' })

bike
  .save()
  .then((data) => console.log('It worked', data))
  .catch((err) => console.log('Error', err))
