//Récupération du paquet NPM express
const express = require('express');

//Initialisation de l'app
const app = express();

app.get('/', (req, res) => {
    res.write('=== Hello, GIT ! ===');
    res.end();
});

app.get('/hello/:name', (req, res) => {
    res.write(`Bonjour, ${req.params.name}`);
    res.end();
});

app.get('/goodbye/:name', (req, res) => {
    res.write(`Goodbye, ${req.params.name}`);
    res.end();
});

//Lancement du serveur
app.listen(3000, _ => {
    console.log(`App listening on http://localhost:3000`);
});
