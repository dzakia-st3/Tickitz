require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', router)

// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'tickitz'
// });

// db.connect ((err) => {
//   if(err) {
//     console.log(err)
//   }
//   console.log('DB CONNECTED')
// })


// app.get('/movie', (req, res) => {
//   db.query('SELECT * FROM `moviedetails`', (err, result) => {
//     if (err) {
//       res.send ({
//         message: "ada error"
//       })
//     }
//     res.status(200).send({
//       message: "get all from movies success",
//       status: 200,
//       data: result
//     })
//   })
// })


// app.post('/movie', (req, res) => {
//   const {image, title, genre, release_date, directed_by, duration, cast, synopsis} = req.body


//   db.query(`INSERT INTO moviedetails(image, title, genre, release_date, directed_by, duration, cast, synopsis) VALUES ('${image}', '${title}', '${genre}', '${release_date}', '${directed_by}', '${duration}', '${cast}', '${synopsisi}')`, (err, result) => {
//     if(err) {
//       console.log(err)
//       res.send({message: "ada error"})
//     }
//     res.status(200).send({
//       message: "add new movies succes",
//       status: 200,
//       data: result
//     })
//   })
// })


// app.patch('/movie/:id', (req, res) => {

//   const {id} =req.params
//   db.query(`SELECT * FROM moviedetails where id = ${id}`, (err, result) => {
//     if(err) {res.send({message: "ada error"})}

//     const previousData = {
//       ...result[0],
//       ...req.body
//     }
//     const {image, title, genre, release_date, directed_by, duration, cast, synopsis } = previousData

//     db.query(`UPDATE moviedetails SET image = ${image}, title = ${title}, genre = ${genre}, release_date = ${release_date}, directed_by = ${directed_by}, duration = ${duration}, cast = ${cast}, synopsis = ${synopsis}`, (err, result) => {
//       if(err) {
//         console.log(err)
//         res.send({message: "ada error"})
//       }
//       res.status(200).send({
//         message: "update movies succes",
//         status: 200,
//         data: result
//       })
//     })
//   })

// })


app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`)
})



// app.get('/users', (req, res) => {
//   res.send([
//       {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//           "street": "Kulas Light",
//           "suite": "Apt. 556",
//           "city": "Gwenborough",
//           "zipcode": "92998-3874",
//           "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//           }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//           "name": "Romaguera-Crona",
//           "catchPhrase": "Multi-layered client-server neural-net",
//           "bs": "harness real-time e-markets"
//         }
//       },
//       {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//           "street": "Victor Plains",
//           "suite": "Suite 879",
//           "city": "Wisokyburgh",
//           "zipcode": "90566-7771",
//           "geo": {
//             "lat": "-43.9509",
//             "lng": "-34.4618"
//           }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//           "name": "Deckow-Crist",
//           "catchPhrase": "Proactive didactic contingency",
//           "bs": "synergize scalable supply-chains"
//         }
//       },
//       {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//           "street": "Douglas Extension",
//           "suite": "Suite 847",
//           "city": "McKenziehaven",
//           "zipcode": "59590-4157",
//           "geo": {
//             "lat": "-68.6102",
//             "lng": "-47.0653"
//           }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//           "name": "Romaguera-Jacobson",
//           "catchPhrase": "Face to face bifurcated interface",
//           "bs": "e-enable strategic applications"
//         }
//       },
//       {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//           "street": "Hoeger Mall",
//           "suite": "Apt. 692",
//           "city": "South Elvis",
//           "zipcode": "53919-4257",
//           "geo": {
//             "lat": "29.4572",
//             "lng": "-164.2990"
//           }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//           "name": "Robel-Corkery",
//           "catchPhrase": "Multi-tiered zero tolerance productivity",
//           "bs": "transition cutting-edge web services"
//         }
//       },
//       {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//           "street": "Skiles Walks",
//           "suite": "Suite 351",
//           "city": "Roscoeview",
//           "zipcode": "33263",
//           "geo": {
//             "lat": "-31.8129",
//             "lng": "62.5342"
//           }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//           "name": "Keebler LLC",
//           "catchPhrase": "User-centric fault-tolerant solution",
//           "bs": "revolutionize end-to-end systems"
//         }
//       },
//       {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//           "street": "Norberto Crossing",
//           "suite": "Apt. 950",
//           "city": "South Christy",
//           "zipcode": "23505-1337",
//           "geo": {
//             "lat": "-71.4197",
//             "lng": "71.7478"
//           }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//           "name": "Considine-Lockman",
//           "catchPhrase": "Synchronised bottom-line interface",
//           "bs": "e-enable innovative applications"
//         }
//       },
//       {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//           "street": "Rex Trail",
//           "suite": "Suite 280",
//           "city": "Howemouth",
//           "zipcode": "58804-1099",
//           "geo": {
//             "lat": "24.8918",
//             "lng": "21.8984"
//           }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//           "name": "Johns Group",
//           "catchPhrase": "Configurable multimedia task-force",
//           "bs": "generate enterprise e-tailers"
//         }
//       },
//       {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//           "street": "Ellsworth Summit",
//           "suite": "Suite 729",
//           "city": "Aliyaview",
//           "zipcode": "45169",
//           "geo": {
//             "lat": "-14.3990",
//             "lng": "-120.7677"
//           }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//           "name": "Abernathy Group",
//           "catchPhrase": "Implemented secondary concept",
//           "bs": "e-enable extensible e-tailers"
//         }
//       },
//       {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//           "street": "Dayna Park",
//           "suite": "Suite 449",
//           "city": "Bartholomebury",
//           "zipcode": "76495-3109",
//           "geo": {
//             "lat": "24.6463",
//             "lng": "-168.8889"
//           }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//           "name": "Yost and Sons",
//           "catchPhrase": "Switchable contextually-based project",
//           "bs": "aggregate real-time technologies"
//         }
//       },
//       {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//           "street": "Kattie Turnpike",
//           "suite": "Suite 198",
//           "city": "Lebsackbury",
//           "zipcode": "31428-2261",
//           "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//           }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//           "name": "Hoeger LLC",
//           "catchPhrase": "Centralized empowering task-force",
//           "bs": "target end-to-end models"
//         }
//       }
//     ]
//   )
// })

// app.post('/users', (req, res) => {
//   res.send({
//     message: "Tambah User Berhasil"
//   })
// })

// app.post('/users', (req, res) => {
//   res.send([
//     {
//     "id": 1,
//     "title": "Spider-Man: Homecoming",
//     "genre": "Adventure, Action, Sci-Fi",
//     "release-date":"June 28, 2017",
//     "directed-by": "Jon Watss",
//     "duration": "2 hours 13 minutes",
//     "cast": "Tom Holland, Michael Keaton, Robert Downey Jr., ...",
//     "synopsis": "Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. "
//   }
// ])
// })

// app.listen(port, () => {
//   console.log(`Tickitz Backend listening on port ${port}`)
// })