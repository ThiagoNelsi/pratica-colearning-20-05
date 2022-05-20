const filmes = require('../models/filmes');

function numeroAleatorio() {
    return Math.floor(Math.random() * 1000);
}

const controller = {
    listar: (req, res) => {
        res.send(filmes);
    },

    buscarPorId: (req, res) => {
        const id = req.params.id;

        const filme = filmes.find(filme => filme.id == id);

        if (!filme) res.status(400).send();

        res.send(filme);
    },

    buscarPorTitulo: (req, res) => {
        const { titulo } = req.params;

        const filme = filmes.find(filme => filme.titulo == titulo);

        if (!filme) res.status(400).send();

        res.send(filme);
    },

    criar: (req, res) => {
        const { titulo, nota } = req.body;

        const filme = {
            id: numeroAleatorio(),
            titulo,
            nota,
        };

        filmes.push(filme);

        res.send(filme);
    }
}

module.exports = controller;