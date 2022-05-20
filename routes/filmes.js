const express = require('express');
const controllerFilmes = require('../controllers/filmes');

const router = express.Router();

router.get('/', controllerFilmes.listar);
router.get('/:id', controllerFilmes.buscarPorId);
router.get('/titulo/:titulo', controllerFilmes.buscarPorTitulo);
router.post('/', controllerFilmes.criar);

module.exports = router;