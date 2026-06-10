const express = require('express');
const path = require('path');

// Importa o seu arquivo database.js
const resumosDB = require('../database.js'); 

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/ppgvet1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ppgvet1.html'));
});
app.get('/ppgvet2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ppgvet2.html'));
});
app.get('/ppgvet3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ppgvet3.html'));
});

app.get('/ppgvet4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ppgvet4.html'));
});


app.get('/api/resumos-simples', (req, res) => {
    res.json(resumosDB);
});

module.exports = app;