const express = require("express")
const fileUpload = require("express-fileupload")
const app = express()
const ejs = require("ejs")
const path = require("path")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID

//const connectionString = "mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority" 
const connectionString = "mongodb://127.0.0.1:27017/" //BDD locale pour pas remplir la BDD en ligne(mongodb installé en local et runing)

app.use(express.static(path.join(__dirname, "/public")))
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set("view engine", "ejs")

const listController = require("./controllers/list_controller.js")
const viewController = require("./controllers/view_controller.js")
const backlogController = require("./controllers/backlog_controller.js")
const userStoryController = require("./controllers/userStory_controller.js")
const sprintController = require("./controllers/sprint_controller.js")
const releaseController = require("./controllers/release_controller.js")
const taskController = require("./controllers/task_controller.js")

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("Connected to Database")
        const db = client.db("MAIN_DATABASE")

        app.get("/", (req, res) => {
            res.redirect("/projectList")
        })

        listController.init(app, db)

        viewController.init(app, db, ObjectId)

        backlogController.init(app, db, ObjectId)

        userStoryController.init(app, db, ObjectId)
        
        taskController.init(app, db, ObjectId)

        sprintController.init(app, db, ObjectId)

        releaseController.init(app, db, ObjectId)

        app.listen(3000, function () {
            console.log("listening on 3000")
        })
    })
    .catch(console.error)

