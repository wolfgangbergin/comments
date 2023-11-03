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