const express = require('express');

const app = express();
app.listen(80);


app.get('/', (req, res) => {
    const now = new Date().toLocaleString();
    console.log('someone visited our page at', now);
    res.send(`Hello there! The time is ${now}!`)
})
