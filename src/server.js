const fileUpload        = require("express-fileupload")
const MongoClient       = require("mongodb").MongoClient
const ObjectId          = require("mongodb").ObjectID
const bodyParser        = require("body-parser")
const express           = require("express")
const path              = require("path")
const app               = express()
//const ejs               = require("ejs")
const connectionString  = "mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority" 
const port              = 3000

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "/public")))
app.use(fileUpload())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set("view engine", "ejs")

const listController        = require("./controllers/list_controller.js")
const viewController        = require("./controllers/view_controller.js")
const backlogController     = require("./controllers/backlog_controller.js")
const userStoryController   = require("./controllers/userStory_controller.js")
const sprintController      = require("./controllers/sprint_controller.js")
const releaseController     = require("./controllers/release_controller.js")
const taskController        = require("./controllers/task_controller.js")
const roleController        = require("./controllers/role_controller.js")

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

        roleController.init(app, db, ObjectId)

        app.listen(port, function () {
            console.log("listening on "+port)
        })
    })
    .catch(console.error)

