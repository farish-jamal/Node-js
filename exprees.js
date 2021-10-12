const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html', 'utf-8');
    res.send(data)
})
app.get('/about', (req, res) => {
    res.send('about!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})