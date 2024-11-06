const express = require('express');
const app = express();

app.get('/ifpe', (req, res) => {
    res.send('Ok teste!');
});

app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000.');
});