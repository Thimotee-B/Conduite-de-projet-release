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

        /*************************************/
        /*                                   */
        /*         LISTE DES PROJETS         */ 
        /*                                   */ 
        /*************************************/

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
                    sprint: [],
                    nbUs: 0,
                    nbSprint: 0
                }
            )
                .then(result => {
                    res.redirect('/projectList')
                })
                .catch(error => console.error(error))
        })

        /*************************************/
        /*                                   */
        /*              ACCUEIL              */ 
        /*                                   */ 
        /*************************************/

        // Page d'un projet (accueil)
        app.get('/projectView/:projectId', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render('pages/project.ejs', {project: results})
            })
            .catch(error => console.error(error))
            
        })


        /*************************************/
        /*                                   */
        /*              BACKLOG              */ 
        /*                                   */ 
        /*************************************/

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
                const updateNbUs = (results.us.length != 0) ? results.nbUs+1 : 1;
                projectCollection.updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $set:  {nbUs:  updateNbUs}},
                    { upsert: true}
                )
                .then(result => {
                    const updateNbUs = (results.us.length != 0) ? results.nbUs+1 : 1;
                    projectCollection.updateOne(
                        { _id : ObjectId(req.params.projectId)},
                        { $push: 
                            { us: 
                                {
                                    entantque: req.body.entantque,
                                    jesouhaite: req.body.jesouhaite,
                                    afinde: req.body.afinde,
                                    importance: req.body.importance,
                                    difficulte: req.body.difficulte,
                                    plannification: req.body.plannification,
                                    id: updateNbUs
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

        // Supprimer une US
        app.get('/projectView/:projectId/removeUS/:pos', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const usPos = req.params.pos;
                projectCollection.updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {us:  results.us[usPos]}}
                )
                .then(result => {
                    res.redirect('/projectView/'+req.params.projectId+'/backlog')
                })
                .catch(error => console.error(error))
            })
        })


        // Modifier une US
        app.post('/projectView/:projectId/updateUS/:pos', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const usPos = parseInt(req.params.pos,10);
                const usId = results.us[usPos].id;
                projectCollection.updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {us:  results.us[usPos]}}
                )
                .then(result => {
                    projectCollection.updateOne(
                        { _id : ObjectId(req.params.projectId)},
                        { $push:  {
                            us: {
                                $each: [{
                                    entantque: req.body.entantque,
                                    jesouhaite: req.body.jesouhaite,
                                    afinde: req.body.afinde,
                                    importance: req.body.importance,
                                    difficulte: req.body.difficulte,
                                    plannification: req.body.plannification,
                                    id: usId
                                }],
                                $position: usPos
                            } 
                        }
                    })
                    .then(results =>{
                        res.redirect('/projectView/'+req.params.projectId+'/backlog')
                    })
                })
                .catch(error => console.error(error))
            })
        })

        /*************************************/
        /*                                   */
        /*              SPRINT               */ 
        /*                                   */ 
        /*************************************/

        app.get('/projectView/:projectId/sprint', (req, res) => {
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render('pages/sprint.ejs', {project: results})
            })
            .catch(error => console.error(error))
            
        })

        // Création d'un nouveau Sprint
        app.post('/projectView/:projectId/createSprint', (req, res) => {
            console.log('ok1');
            const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const nbSprint = (results.sprint.length != 0) ? results.nbSprint+1 : 1;
                projectCollection.updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $set:  {nbSprint:  nbSprint}},
                    { upsert: true}
                )
                .then(result => {
                    const nbSprint = (results.sprint.length != 0) ? results.nbSprint+1 : 1;
                    projectCollection.updateOne(
                        { _id : ObjectId(req.params.projectId)},
                        { $push: 
                            { sprint: 
                                {
                                    id: 'Sprint '+nbSprint
                                }
                            }
                        }
                    )
                    .then(result => {
                        res.redirect('/projectView/'+req.params.projectId+'/sprint')
                    })
                    .catch(error => console.error(error))
                })
                .catch(error => console.error(error))
            })
            
        })



        app.listen(3000, function () {
            console.log('listening on 3000')
        })
    })
    .catch(console.error)

