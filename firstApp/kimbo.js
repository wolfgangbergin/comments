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

    app.get('*', (req, res)=>{
        res.send('Error does not compute')
    })

// globalThis.l = console.log;
// globalThis.d = console.dir   
 // globalThis.wolfgang = {}


