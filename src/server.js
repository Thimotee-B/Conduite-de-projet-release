const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require("path");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

connectionString = 'mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority'
app.use(express.static('public'))

app.set("view engine", "ejs");


MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        const dataBaseName = 'MAIN_DATABASE';
        const db = client.db(dataBaseName)
        const projectCollection = db.collection('projects')


        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())

        app.get('/', (req, res) => {
            res.redirect('/projectList')
        })

        app.get('/projectList', (req, res) => {
            const cursor = db.collection('projects').find().toArray()
                .then(results => {
                    res.render('pages/projectsList.ejs', { projectsList: results })
                })
                .catch(error => console.error(error))
        })

        app.post('/createNewProject', (req, res) => {
            projectCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/projectList')
                })
                .catch(error => console.error(error))
        })

        // app.put('/quotes', (req, res) => {
        //     quotesCollection.findOneAndUpdate(
        //         { name: 'Yoda' },
        //         {
        //             $set: {
        //                 name: req.body.name,
        //                 quote: req.body.quote
        //             }
        //         },
        //         {
        //             upsert: true
        //         }
        //     )
        //         .then(result => {
        //             res.json('Success')
        //         })
        //         .catch(error => console.error(error))
        // })

        // app.delete('/quotes', (req, res) => {
        //     quotesCollection.deleteOne(
        //         { name: req.body.name }
        //     )
        //         .then(result => {
        //             if (result.deletedCount === 0) {
        //                 return res.json('No quote to delete')
        //             }
        //             res.json(`Deleted Darth Vadar's quote`)
        //         })
        //         .catch(error => console.error(error))
        // })


        app.listen(3000, function () {
            console.log('listening on 3000')
        })
    })
    .catch(console.error)

