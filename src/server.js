const express = require('express')
const app = express()
const ejs = require("ejs")
const path = require("path");
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

connectionString = 'mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority'

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");


MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        const dataBaseName = 'MAIN_DATABASE';
        const db = client.db(dataBaseName)
        const projectCollection = db.collection('projects')
        const usCollection = db.collection('us')


        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())

        app.get('/', (req, res) => {
            res.redirect('/projectList')
        })

        // Liste des projets
        app.get('/projectList', (req, res) => {
            const cursor = db.collection('projects').find().toArray()
                .then(results => {
                    res.render('pages/projectsList.ejs', { projectsList: results })
                })
                .catch(error => console.error(error))
        })

        // Création d'un nouveau projet
        app.post('/createNewProject', (req, res) => {
            let today = new Date(); 
            let dd = today.getDate(); 
            let mm = today.getMonth() + 1; 
            let yyyy = today.getFullYear(); 
            if (dd < 10) { 
                dd = '0' + dd; 
            } 
            if (mm < 10) { 
                mm = '0' + mm; 
            } 
            today = dd + '/' + mm + '/' + yyyy; 
            projectCollection.insertOne(
                {
                    projectName: req.body.projectName,
                    projectDesc: req.body.desc,
                    sprintDelay: req.body.sprintDelay,
                    dateEnd: req.body.dateEnd,
                    beginDate: today.toString(),
                    role: 'Scrum Master',
                    nbMember: 1,
                    us: [],
                    nbUs: 0
                }
            )
                .then(result => {
                    res.redirect('/projectList')
                })
                .catch(error => console.error(error))
        })

        // Page d'un projet (accueil)
        app.get('/projectView/:projectId', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render('pages/project.ejs', {project: results})
            })
            .catch(error => console.error(error))
            
        })

        // Page backlog
        app.get('/projectView/:projectId/backlog', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render('pages/backlog.ejs', {project: results})
            })
            .catch(error => console.error(error))
            
        })

        // Création une nouvelle US
        app.post('/projectView/:projectId/createUS', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                projectCollection.updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $set:  {nbUs:  results.nbUs+1}},
                    { upsert: true}
                )
                .then(result => {
                    projectCollection.updateOne(
                        { _id : ObjectId(req.params.projectId)},
                        { $push: 
                            { us: 
                                {
                                    projectDesc: 'En tant que '+req.body.entantque+', je souhaite '+req.body.jesouhaite+' afin de '+req.body.afinde,
                                    importance: req.body.importance,
                                    difficulte: req.body.difficulte,
                                    plannification: req.body.plannification,
                                    id: results.nbUs+1
                                }
                            }
                        }
                    )
                    .then(result => {
                        res.redirect('/projectView/'+req.params.projectId+'/backlog')
                    })
                    .catch(error => console.error(error))
                })
                .catch(error => console.error(error))
            })
            
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

