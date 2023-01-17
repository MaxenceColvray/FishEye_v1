const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/programmation', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/programmation.html'));
});

app.listen(8000, () => console.log('http://localhost:8000'));