//require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')
// const router = require('./routes')
// const cors = require('cors')

// app.use(cors())


// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/api/v1', router)

const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'tickitz'
});

db.connect ((err) => {
  if(err) {
    console.log(err)
  }
  console.log('DB CONNECTED')
})


app.get('/test', (req, res) => {
  db.query('SELECT schedule.date, schedule.place, schedule.cinema, GROUP_CONCAT (category1,category2, category3) as categories, schedule.addres, schedule.price FROM schedule INNER JOIN categories ON schedule.id_movie=categories.id GROUP BY schedule.id_movie', 
  
//   SELECT orders.order_id, customers.customer_name, orders.order_date FROM orders INNER JOIN customers ON orders.customer_id=customers.customers_id

  (err, result) => {
    if (err) {
        console.log(err)
        res.send ({
        message: "ada error"
      })
    }
    res.status(200).send({
      message: "get all from test success",
      status: 200,
      data: result
    })
  })
})

app.listen(port, () => {
    console.log(`Tickitz Backend listening on port ${port}`)
  })
  