const express = require('express');
const app =  express();
const port = 3000;
const path = require('path');

app.use('/assets', express.static('public'));
const errorHandling = function (req, res){
    res.status(404).sendFile(path.join(__dirname, './public/404.html'));
}
app.use(errorHandling);
app.listen(port);