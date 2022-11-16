import express from 'express';

const app = express();

app.listen(80);


// app.get('/', (req, res) => {
//     res.send("Hello there! The time is " + new Date().toLocaleTimeString());
// })

app.use(express.static(__dirname + "/../../hacksu-2021/dist", {
    index: ['index.html']
}))



