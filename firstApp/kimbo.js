require('./wolfgang')
const express = require('express')
const app = express()


app.use((req, res)=>{
   
    res.send('This is your response2')
})

app.listen(3000, () => {
    l('listening on port 3000')
    })

// globalThis.l = console.log;
// globalThis.d = console.dir   
 // globalThis.wolfgang = {}

