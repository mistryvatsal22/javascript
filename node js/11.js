const express = require('express')
const app = express()
const port =4000

app.get('/',(req,res) => {
    res.send('hello')
})

app.get('/twitter',(req,res)=>{
    res.send('hellobgrff')
})

app.listen(port,()=>{
    console.log('exmaple app on port ${port}')
})
