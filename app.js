const express = require('express');
const rotasFilmes = require('./routes/filmes');

const app = express();
app.use(express.json());

const PORT = 3000;

// MVC

// MODEL - É a camada de dados
// VIEW - É a camada de views
// CONTROLLER - É a camada que vai orquestrar como as outras camadas vão interagir

// Criar uma rota que receba o id de um filme como parâmetro
// e retorne somente a nota desse filme

app.use('/filmes', rotasFilmes);

app.listen(PORT, () => {
    console.log(`Servidor ouvindo em http://localhost:${PORT}`);
});