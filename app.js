const express = require('express');
require('dotenv').config()
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
})

// app.post('/users')
const PORT = process.env.PORT || 3000;
console.log(process.env);


app.listen(PORT);