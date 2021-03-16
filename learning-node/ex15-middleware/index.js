const express = require('express');
const app = express();
const port = 3000;
const requestTime = function(req, res, next){
    const message = `Request: ${req.baseURL} ${Date.now()}`;
    console.log(message);

    next();
};
app.use(requestTime)

app.get('/', (req, res)=>{
    res.json({
        "status": 200,
        "message": "Request/Response is OK"
    })
});
app.listen(port, function(){
    console.log(`server listening to ${port}`);
});

