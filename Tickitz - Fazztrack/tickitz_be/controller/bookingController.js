const booking = require('../model/booking')

module.exports = {
    getAllBooking: async (req, res) => {
        try {
            const result = await booking.get(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, addNewBooking: async (req, res) => {
        try {
            const result = await booking.add(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, updateBooking: async (req, res) => {
        try {
            const result = await booking.update(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, deleteBooking: async (req, res) => {
        try {
            const result = await booking.remove(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
}