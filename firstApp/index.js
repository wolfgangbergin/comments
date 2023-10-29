require('./wolfgang');
const express = require('express');
const app = express();

// app.use((req, res)=>{
//   l(req)
//     res.send('This is your response')
// })

app.get('/', (req, res) => {
  res.send('home page');
});

app.get('/r/:subreddit/:postId', (req, res) => {
  l(req.params);
  const { subreddit, postId } = req.params;
  res.send(
    `<h1 style="color:red">subreddit:${subreddit},  postId: ${postId}</h1>`
  );
});

app.post('/cats', (req, res) => {
  res.send('this is a post request');
});

app.get('/cats', (req, res) => {
  res.send('This is your response Meow');
});

app.get('/dogs', (req, res) => {
  res.send('woof woof');
});

app.get('/search', (req, res) => {
  l(req.query);
  const {  wolfman, color } = req.query;
  if (!color){
    res.send(
        `<h1 style="color:${color}">No color givin,  </h1>`
      );
  }
  res.send(
    `<h1 style="color:${color}">wolfman: ${wolfman},  </h1>`
  );
});

app.get('*', (req, res) => {
  res.send('Error does not compute');
});

app.listen(3000, () => {
  l('listening on port 3000');
});

// globalThis.l = console.log;
// globalThis.d = console.dir
// globalThis.wolfgang = {}
