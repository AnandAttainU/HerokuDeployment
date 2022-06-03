const express = require('express');
require('dotenv').config()
const app = express();

app.get('/', (req, res)=>{
    res.send(process.env);
})

// app.post('/users')
const PORT = process.env.PORT || 3000;


app.listen(PORT);