require('./wolfgang')
const express = require('express')
const app = express()


// app.use((req, res)=>{
//     // l(req)
//     res.send('<h1 style="color:red">This is your response2</h1>')
// })

app.get('/', (req, res)=>{
    res.send('<h1 style="color:green">Homepage</h1>')
})

app.get('/B/:sub/:sub/', (req, res)=>{
    res.send('<h1 style="color:red">sub /B</h1>')
})


app.get('/wolf', (req, res)=>{
    res.send('<h1 style="color:red">wolf wolf</h1>')
})

app.get('/kimbo', (req, res)=>{
    res.send('<h1 style="color:blue">kimbo kimbo </h1>')
})

app.listen(3001, () => {
    l('listening on port 3001')
    })

    app.get('/a/:tuesday/:thursday/search', (req, res) => {
        l(req.query);
        const {  wolfman, color } = req.query;
        const {tuesday, thursday} = req.params
        if (!color){
          res.send(
              `<h1 style="color:${color}">No color givin,  </h1>`
            );
        }
        res.send(
          `<h1 style="color:${color}">wolfman: ${wolfman}, tuesday: ${tuesday}, thursday: ${thursday}, </h1>`
        );
      });


      app.post('/a/:tuesday/:thursday/search', (req, res) => {
        l(req.query);
        const {  wolfman, color } = req.query;
        const {tuesday, thursday} = req.params
        if (!color){
          res.send(
              `<h1 style="color:${color}">No color givin,  </h1>`
            );
        }
        res.send(
          `<h1 style="color:${color}">wolfman: ${wolfman}, tuesday: ${tuesday}, thursday: ${thursday}, </h1>`
        );
      });

    app.get('*', (req, res)=>{
        res.send('Error does not compute')
    })

// globalThis.l = console.log;
// globalThis.d = console.dir   
 // globalThis.wolfgang = {}


