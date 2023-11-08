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

productScheme.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 })
}

productScheme.methods.toggleOnSale = function () {
  this.onSale = true
  return this.save()
}

productScheme.methods.addCategory = function (newCat) {
  this.categories.push(newCat)
  return this.save()
}

const Product = mongoose.model('Product', productScheme)

let wolf = new Product({
  name: 'jojoMan',
  price: 8.2,
  categories: ['Comedy'],
})

wolf.save()


let jojo = new Product({
  name: 'jojoMan',
  price: 8.2,
  categories: ['Comedy'],
})

jojo.save()


const kimbo = Product.findOne({
  name: 'jojoMan',
})


const findProduct = async function()  {
  const foundProduct = await Product.findOne({
    name: 'jojoMan',
  })

   await foundProduct.toggleOnSale()
    await foundProduct.addCategory('Outdoors')
   l(foundProduct)

}

// findProduct()




Product.fireSale().then(res => l(res))
