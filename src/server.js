const express = require("express")
const app = express()
const ejs = require("ejs")
const path = require("path")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID

const connectionString = "mongodb+srv://cdp2020:cdp2020@clustercdp.8wan9.mongodb.net/cdp2020?retryWrites=true&w=majority"

app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")

const projectListRoutes = require("./routes/projectList.js")
const projectViewRoutes = require("./routes/projectView.js")
const projectBacklogRoutes = require("./routes/projectBacklog.js")
const projectUserStoryRoutes = require("./routes/projectUserStory.js")
const projectSprintRoutes = require("./routes/projectSprint.js")

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

        projectSprintRoutes.init(app, db, ObjectId)

        app.listen(3000, function () {
            console.log("listening on 3000")
        })
    })
    .catch(console.error)

