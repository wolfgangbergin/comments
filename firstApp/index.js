require('./wolfgang')
const express = require('express')
const app = express()
const path = require('path')
const redditData = require('./data.json')
const http = require('http')
const reload = require('reload')
const { comments } = require('./comments')

const { v4: uuid } = require('uuid')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  express.static(path.join(__dirname, './public'))
)

const tuesday = 'tuesday'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params
  const { comment } = req.body

  const foundComment = comments.find(
    (c) => c.id === id
  )

  foundComment.comment = comment
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

  l(comments.length)

  comments.push({ username, comment, id: comments.length })
  res.redirect('/comments')
})











///////////////////////////////////////////////
app.get('/comments/:id', (req, res) => {
  const { id } = req.params
  l('wolfman58',  id)
l('wolfman67', comments.find((c) => c.id == +id))
  const obj = comments.find((c) => c.id == +id)
  
  res.render('show', { obj })
})
///////////////////////////////////////////////
















app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params

  const obj = comments.find((c) => c.id == +id)
  res.render('edit', { obj })
})










const server = http.createServer(app)

server.listen(3000, () => {
  l('listening on port 3000')
})

reload(app)
