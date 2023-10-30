require('./wolfgang')
const express = require('express')
const app = express()
const path = require('path')

const tuesday = 'tuesday'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cats', (req, res) => {
  const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston']
  res.render('cats', { cats })
})

app.get('/r/:address1/:address2', (req, res) => {

  const { address1, address2 } = req.params
  res.render('subreddit', { address1, address2 })
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1
  res.render('random', { num, tuesday })
})

app.listen(3000, () => {
  l('listening on port 3000')
  l(__dirname)
})
