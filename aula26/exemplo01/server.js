const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ok!');
});

app.get('/estudante', (req, res) => {
  res.send('Retorna lista de estudantes.');
});

app.post('/estudante', (req, res) => {
    res.send('Cadastra um estudante.');
});


app.all('/todos', (req, res) => {
    res.send('Todos os métodos HTTP');
});


app.listen(3000, () => {
  console.log('Servidor em execução...');
});