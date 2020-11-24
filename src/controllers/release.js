const fs = require("fs")
const path = require("path")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/release", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render("pages/release.ejs", {project: results})
            })
            .catch(error => console.error(error))
        
    })
    
    app.post("/projectView/:projectId/createRelease", (req, res) => {
        // Récupère le projet
        const cursor = db.collection("projects").findOne({ _id: ObjectId(req.params.projectId) })
            .then((projectResult) => {
                //Maj nbRelease dans projects
                const updateNbRelease = projectResult.releases.length != 0 ? projectResult.nbRelease + 1 : 1
                const rfile = req.files.releaseFile
                if(!rfile || Object.keys(rfile).length === 0) {
                    return res.status(400).send("No file were uploaded.")
                }

                const releasePath = path.join(__dirname, "/../upload/releases/", req.params.projectId, "/")
                const releasePathFull = releasePath + rfile.name
                
                if (!fs.existsSync(releasePath)) {
                    fs.mkdir(releasePath, function (err) {
                        if (err) {
                            console.log(err)
                            return res.status(500).send(err)
                        }
                    })
                }
                
                rfile.mv(releasePathFull, function(err) {
                    if (err) {
                        console.log("pas bon" + err)
                        return res.status(500).send(err)
                    }
                })
                const today = new Date()
                const date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear()
                
                db.collection("projects")
                    .updateOne(
                        { _id: ObjectId(req.params.projectId) },
                        { $set: { nbRelease: updateNbRelease } },
                        { upsert: true }
                    )
                    .then((result) => {
                    // ajoute la release dans le project
                        db.collection("projects")
                            .updateOne(
                                { _id: ObjectId(req.params.projectId) },
                                {
                                    $push: {
                                        releases: {
                                            id: updateNbRelease,
                                            title: req.body.title,
                                            description: req.body.description,
                                            fileName: rfile.name,
                                            link: "/upload/releases/" + req.params.projectId + "/" + rfile.name,
                                            date: date
                                        },
                                    },
                                }
                            )
                            .then((result) => {
                                res.redirect("/projectView/" + req.params.projectId + "/release")
                            })
                            .catch((error) => console.error(error))
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    })

    app.get("/projectView/:projectId/removeRelease/:pos", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const usPos = req.params.pos
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {releases:  results.releases[usPos]}}
                )
                    .then(result => {
                        res.redirect("/projectView/"+req.params.projectId+"/release")
                    })
                    .catch(error => console.error(error))
            })
    })

    app.get("/projectView/:projectId/release/download/:filename", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const p = path.join(__dirname, "../upload/releases/", req.params.projectId, req.params.filename)
                if (!fs.existsSync(p)) {
                    return res.status(404).send("file not found")
                }
                res.download(p)
                //res.render("pages/release.ejs", {project: results})
            })
            .catch(error => console.error(error))
        
    })
}
    
module.exports = {
    init
}