const express = require("express");
const app = express()
const movieRoutes = require('./movieRoutes')
const bookingRoutes = require('./bookingRoutes')
const scheduleRoutes = require('./scheduleRoutes')



app.use('/movie', movieRoutes)
app.use('/booking', bookingRoutes)
app.use('/schedule', scheduleRoutes)




module.exports = app