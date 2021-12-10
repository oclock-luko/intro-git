const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.write('Bonjour, GIT !');
    res.end();
});

app.get('/hello/:name', (req, res) => {
    res.write(`Bonjour, ${req.params.name}`);
    res.end();
});

app.get('/goodbye', (req, res) => {
    res.write('Au revoir');
    res.end();
});

app.listen(3000, _ => {
    console.log(`App listening on http://localhost:3000`);
});