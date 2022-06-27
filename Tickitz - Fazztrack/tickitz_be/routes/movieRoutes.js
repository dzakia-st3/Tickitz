const express = require ("express")
const {getAllMovies, getMoviesByTitle, getMoviesSort, getMoviesById, addNewMovies, updateMovie, deleteMovie} = require('../controller/movieController')
const router = express.Router ()

router.get('/', getAllMovies)
// router.get('/:title', getMoviesByTitle)
router.get('/sort', getMoviesSort)
router.get('/:id', getMoviesById)
router.post('/', addNewMovies)
router.patch('/:id', updateMovie)
router.delete('/:id', deleteMovie)



module.exports = router