const joker = require('one-liner-joke');
const joke = joker.getRandomJoke({'exclude_tags': ['racist', 'dirty', 'sex']});
const joke1 = joker.getRandomJoke({'exclude_tags': ['racist', 'dirty', 'sex']});
const jokes = `1.${joke.body}\n
             2.${joke1.body}`
const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req, res)=>{
    res.send('Welcome to The Joker')
});
app.get('/jokes',(req,res)=>{
    res.send(jokes);
})
app.get('/joke',(req,res)=>{
    res.send(joke.body);
})
app.post('/joke', (req,res)=>{
    res.send('my jokes are too funny, Im not getting new ones from you');
})
app.put('/joke', (req, res)=>{
    res.send('no, no, no... not changing my act dude')
})
app.delete('/joke', (req, res)=>{
    res.send('good jokes never get too old')
})
app.all('/joke', (req, res)=> {
    res.send("I know I'm so good that you're looking for jokes everywhere")
})
app.listen(port, (err)=>{
    if(err){
        console.log("Something went wrong")
    }
    console.log(`You are on port ${port}`)
})
