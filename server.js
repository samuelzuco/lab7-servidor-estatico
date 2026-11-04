const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

const pastaHome = path.join(__dirname, 'public', 'Exercicios de casa');
const pastaProjetos = path.join(__dirname, 'public', 'Projetos_web');

app.get('/Home.html', (req, res) => {
  res.sendFile(path.join(pastaHome, 'home.html'));
});

app.get('/Project.html', (req, res) => {
  res.sendFile(path.join(pastaProjetos, 'esport.html'));
});

app.use(express.static(pastaHome));
app.use(express.static(pastaProjetos));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});