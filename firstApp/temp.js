const tuesday = 'tuesday'

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


  ///////////////////////////////////////////////
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

///////////////////////////////////////////////



