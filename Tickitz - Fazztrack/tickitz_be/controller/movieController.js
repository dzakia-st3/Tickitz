const movie = require('../model/movie')


module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const result = await movie.get(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, getMoviesByTitle: async (req, res) => {
        try {
            const result = await movie.getByName(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, getMoviesSort: async (req, res) => {
        try {
            const result = await movie.getSortName(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, getMoviesById: async (req, res) => {
        try {
            const result = await movie.getById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, addNewMovies: async (req, res) => {
        try {
            const result = await movie.add(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, updateMovie: async (req, res) => {
        try {
            const result = await movie.update(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, deleteMovie: async (req, res) => {
        try {
            const result = await movie.remove(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
}