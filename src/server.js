const express = require("express")
const fileUpload = require("express-fileupload")
const app = express()
const ejs = require("ejs")
const path = require("path")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID

const connectionString = "mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority" 
//const connectionString = "mongodb://127.0.0.1:27017/" //BDD locale pour pas remplir la BDD en ligne(mongodb installé en local et runing)

app.use(express.static(path.join(__dirname, "/public")))
app.use(fileUpload())
app.set("view engine", "ejs")

const projectListRoutes = require("./controllers/projectList.js")
const projectViewRoutes = require("./controllers/projectView.js")
const projectBacklogRoutes = require("./controllers/projectBacklog.js")
const projectUserStoryRoutes = require("./controllers/projectUserStory.js")
const projectSprintRoutes = require("./controllers/projectSprint.js")
const projectTasksRoutes = require("./controllers/projectTasks.js")
const releaseController = require("./controllers/release_controller.js")

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to Database")

        const dataBaseName = "MAIN_DATABASE"
        const db = client.db(dataBaseName)

        app.set("view engine", "ejs")
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(bodyParser.json())

        app.get("/", (req, res) => {
            res.redirect("/projectList")
        })

        projectListRoutes.init(app, db)

        projectViewRoutes.init(app, db, ObjectId)

        projectBacklogRoutes.init(app, db, ObjectId)

        projectUserStoryRoutes.init(app, db, ObjectId)
        
        projectTasksRoutes.init(app, db, ObjectId)

        projectSprintRoutes.init(app, db, ObjectId)

        releaseController.init(app, db, ObjectId)

        app.listen(3000, function () {
            console.log("listening on 3000")
        })
    })
    .catch(console.error)

