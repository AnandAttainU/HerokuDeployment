const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
})

// app.post('/users')

app.listen(3000);