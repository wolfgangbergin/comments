require('./wolfgang')
const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')
const http = require('http')
const reload = require('reload')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  express.static(path.join(__dirname, './public'))
)

const tuesday = 'tuesday'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cats', (req, res) => {
  const cats = [
    'Blue',
    'Rocket',
    'Monty',
    'Stephanie',
    'Winston',
  ]
  res.render('cats', { cats })
})

app.get('/r/:param1', (req, res) => {
  const { param1 } = req.params
  const data = redditData[param1]

  data
    ? res.render('subreddit', { ...data })
    : res.render('notfound', { param1 })
})

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1
  res.render('random', { num, tuesday })
})
app.get('/getPost', (req, res) => {
  res.render('getPost', {})
})

app.get('/tocos', (req, res) => {
  res.send('GET /tocos response ')
})
app.post('/tocos', (req, res) => {
  const { meat, qty } = req.body
  res.send(
    `OK, here are your ${qty} ${meat} tacos`
  )
})

app.get('/comments', (req, res) => {
  res.render('comments', {
    ...require('./comments'),
  })
})

app.get('/comments/new', (req, res) => {
  res.render('new')
})


app.post('/comments', (req, res) => {
  
  const { username, comment } = req.body
  const comments = require('./comments')

  comments.comments.push({ username, comment })
  res.redirect('/comments')
})


app.get('/comments/:id', (req, res) => {
  const { id } = req.params
  const comments = require('./comments')
  const obj = comments.comments[id]
  res.render('show', { obj, id })
})


const server = http.createServer(app)

server.listen(3000, () => {
  l('listening on port 3000')
})

reload(app)
