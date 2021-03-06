const schedule = require('../model/schedule')

module.exports = {
    getAllScehdule: async (req, res) => {
        try {
            const result = await schedule.get(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    }, addNewSchedule: async (req, res) => {
        try {
            const result = await schedule.add(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, updateSchedule: async (req, res) => {
        try {
            const result = await schedule.update(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }, deleteSchedule: async (req, res) => {
        try {
            const result = await schedule.remove(req,res)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
}