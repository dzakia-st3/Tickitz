const db = require('../helper/db_connection')

module.exports = {
    get : (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT schedule.date, schedule.place, schedule.cinema, schedule.addres, schedule.logo_cinema, GROUP_CONCAT (time1, time2, time3, time4, time5, time6, time7) as showtime, schedule.price FROM showtime INNER JOIN schedule ON showtime.id=schedule.id_movie GROUP BY schedule.id_movie'
    
            db.query(sql, (err, result) => {
                if(err) {
                    reject({message: "ada error"})
                }
                resolve({
                    message: "get all schedule succes",
                    status: 200,
                    data: result
                })
            })   
        })
}, add : (req, res) => {
    return new Promise((resolve, reject) => {
        const {date, place, cinema, addres, logo_cinema, price} = req.body

        const sql = `INSERT INTO schedule (date, place, cinema, addres, logo_cinema, price) VALUES ('${date}', '${place}', '${cinema}', '${addres}', '${logo_cinema}', '${price}')`
        
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err)
                reject({message: "ada error"})
            }
            resolve({
                message: "add schedule succes",
                status: 200,
                data: result
            })
        })   
    })
}, update : (req, res) => {
    return new Promise((resolve, reject) => {
        const {id_movie} = req.params 
        const sql = `SELECT * FROM schedule WHERE id_movie = ${id_movie}`
    
            db.query(sql, (err, result) => {
                if(err) {
                    reject({message: "ada error"})
                }
                const previousData = {
                    ...result[0],
                    ...req.body
                }
                
                const {date, place, cinema, addres, logo_cinema, price } = previousData
                
                db.query(`UPDATE schedule SET date = '${date}', place = '${place}', cinema = '${cinema}', addres = '${addres}', logo_cinema = '${logo_cinema}', price = '${price}' WHERE id_movie = ${id_movie}`, (err, result) => {
                    if (err) {
                        console.log(err)
                        res.send({message: "ada error"})
                    }
                        res.status(200).send({
                        message: "update schedule succes",
                        status: 200,
                        data: result
                        })
                })
            }) 
    })
}, remove: (req, res) => {
    return new Promise((resolve, reject) => {
        const {id_movie} = req.params  
        const sql = `DELETE FROM schedule WHERE id_movie = ${id_movie}`

        db.query(sql, (err, result) => {
            if(err) {
                console.log(err)
                reject({message: "ada error"})
            }
            resolve({
                message: "delete schedule succes",
                status: 200,
                data: result
            })
        })   
    })
},
}