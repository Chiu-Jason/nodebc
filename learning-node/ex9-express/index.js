const express = require('express');
const app = express();
const port = 3000
const Logger = require('logplease');
const logger = Logger.create('server')
app.get('/', (request, response)=>{
    response.send("Congrats you're using your first Node.js and Express as Web Server")
});
app.listen(port,(err)=>{
    if(err){
        logger.error(`Unable to start the server on port ${port}`)
    }
    logger.info(`This HTTP server is running on port ${port}`)
});