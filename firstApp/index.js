require('./wolfgang')
const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')
const http = require('http')
const reload = require('reload')
let { comments } = require('./comments')

const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  express.static(path.join(__dirname, './public'))
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params
  const { comment } = req.body

  const foundComment = comments.find(
    (c) => c.id == id
  )

  l(comments.findIndex(
    (c) => c.id == id
  ))

  foundComment.comment = comment
  const newComment = {...foundComment}
  comments[comments.findIndex(
    (c) => c.id == id
  )] = newComment
  res.redirect('/comments')
})

app.get('/comments', (req, res) => {
  res.render('comments', {
    comments,
  })
})

app.get('/comments/new', (req, res) => {
  res.render('new')
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body

  comments.push({
    username,
    comment,
    id: comments.length,
  })
  res.redirect('/comments')
})

///////////////////////////////////////////////
app.get('/comments/:id', (req, res) => {
  const { id } = req.params

  const obj = comments.find((c) => c.id == +id)

  res.render('show', { obj })
})
///////////////////////////////////////////////

app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params

  const obj = comments.find((c) => c.id == +id)
  res.render('edit', { obj })
})

app.get('/comments/:id/wolfgang', (req, res) => {
  const { id } = req.params

  comments = comments.filter((c) => c.id != +id)
  res.redirect('/comments')
})

const server = http.createServer(app)

server.listen(3000, () => {
  l('listening on port 3000')
})

reload(app)
