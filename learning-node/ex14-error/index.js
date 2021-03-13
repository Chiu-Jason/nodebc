const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, 'index.html'))
})
app.get('/products', (req, res)=>{
    res.status(200).send('Server error, please try it later')
})

app.use(function(req, res, next){
    res.status(404).sendFile(path.join(__dirname, 'joker.png'))
})
app.listen(port)