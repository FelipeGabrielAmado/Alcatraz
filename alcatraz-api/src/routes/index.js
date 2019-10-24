const { Router } = require('express');
const router = Router();

const { getMovies, getMoviesById, createMovie, updateMovie, deleteMovie } = require('../controllers/index.controller');

router.get('/movies', getMovies);
router.get('/movies/:id', getMoviesById);
router.post('/movies', createMovie);
router.put('/movies/:id', updateMovie)
router.delete('/movies/:id', deleteMovie);

module.exports = router;