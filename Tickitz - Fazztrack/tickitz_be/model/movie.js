const db = require('../helper/db_connection')

module.exports = {
    get : (req, res) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT moviedetails.image, moviedetails.title, GROUP_CONCAT (category1,category2, category3) as categories, moviedetails.release_date, moviedetails.directed_by, moviedetails.duration, moviedetails.cast, moviedetails.synopsis FROM categories INNER JOIN moviedetails ON categories.id=moviedetails.id GROUP BY moviedetails.id'
            
            // `SELECT * FROM moviedetails ${title ? `WHERE title LIKE '%${title}%'`: title && director ? `WHERE title LIKE '%${title}%' AND director LIKE '${director}%'`:''}`
    
            db.query(sql, (err, result) => {
                if(err) {
                    console.log(err)
                    reject({message: "ada error"})
                }
                resolve({
                    message: "get all form movies succes",
                    status: 200,
                    data: result
                })
            })   
        })
}, getByName : (req, res) => {
    return new Promise((resolve, reject) => {
        const {title} = req.params 
        const sql = `SELECT * FROM moviedetails WHERE title = '${title}'`
            
         // ${id ? `WHERE id LIKE '${id}'`: id ? `WHERE id LIKE '${id}'`:''}`
    
            db.query(sql, (err, result) => {
                if(err) {
                    console.log(err)
                    reject({message: "ada error"})
                }
                resolve({
                    message: "get movies by title succes",
                    status: 200,
                    data: result
                })
            }) 
    })
}, getSortName : (req, res) => {
    return new Promise((resolve, reject) => {
        const {title = '', release_date = ''} = req.query 
        const sql = `SELECT * FROM moviedetails ${title ? `WHERE title LIKE '%${title}%'`: title && release_date ? `WHERE title LIKE '%${title}%' AND release_date '${release_date}%'`:''} ORDER BY title DESC, release_date ASC`

        // `SELECT * FROM moviedetails ${title ? `WHERE title LIKE '%${title}%'`: title && director ? `WHERE title LIKE '%${title}%' AND director LIKE '${director}%'`:''}`

        db.query(sql, (err, result) => {
            if(err) {
                console.log(err)
                reject({message: "ada error"})
            }
            resolve({
                message: "sort movies succes",
                status: 200,
                data: result
            })
        })   
    })
}, getById : (req, res) => {
    return new Promise((resolve, reject) => {
        const {id} = req.params 
        const sql = `SELECT * FROM moviedetails where id = ${id}`
            
         // ${id ? `WHERE id LIKE '${id}'`: id ? `WHERE id LIKE '${id}'`:''}`
    
            db.query(sql, (err, result) => {
                if(err) {
                    reject({message: "ada error"})
                }
                resolve({
                    message: "get movies by id succes",
                    status: 200,
                    data: result
                })
            }) 
    })
}, add : (req, res) => {
    return new Promise((resolve, reject) => {
        const {image, title, release_date, directed_by, duration, cast, synopsis} = req.body

        const sql = `INSERT INTO moviedetails (image, title, release_date, directed_by, duration, cast, synopsis) VALUES ('${image}', '${title}', '${release_date}', '${directed_by}', '${duration}', '${cast}', '${synopsis}')`
        
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err)
                reject({message: "ada error"})
            }
            resolve({
                message: "add new movies succes",
                status: 200,
                data: result
            })
        })   
    })
}, update : (req, res) => {
    return new Promise((resolve, reject) => {
        const {id} = req.params 
        const sql = `SELECT * FROM moviedetails where id = ${id}`
    
            db.query(sql, (err, result) => {
                if(err) {
                    reject({message: "ada error"})
                } 
                if (result.length == 0) {
                    reject({message: "id tidak ditemukan"})
                }
                const previousData = {
                    ...result[0],
                    ...req.body
                }

                const {image, title, release_date, directed_by, duration, cast, synopsis } = previousData
                
                db.query(`UPDATE moviedetails SET image = '${image}', title = '${title}', release_date = '${release_date}', directed_by = '${directed_by}', duration = '${duration}', cast = '${cast}', synopsis = '${synopsis}' WHERE id = ${id}`, (err, result) => {
                    if (err) {
                        console.log(err)
                        reject({message: "ada error"})
                    }
                        resolve({
                        message: "update movies succes",
                        status: 200,
                        data: result
                        })
                })
            }) 
    })
}, remove: (req, res) => {
    return new Promise((resolve, reject) => {
        const {id} = req.params  
        const sql = `DELETE FROM moviedetails where id = ${id}`

        db.query(sql, (err, result) => {
            if(err) {
                reject({message: "ada error"})
            }
            resolve({
                message: "delete movies succes",
                status: 200,
                data: result
            })
        })   
    })
},
}