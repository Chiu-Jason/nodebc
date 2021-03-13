const express = require('express');
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Please log to GET a user')
})
router.post('/:id', (req, res)=>{
    res.send('Please log to CREATE a user')
})
router.put('/:id', (req, res)=>{
    res.send('Please log to UPDATE a user')
})
router.delete('/:id', (req, res)=>{
    res.send('Please log to DELETE a user')
})
module.exports = router;
