const fs = require("fs")
const path = require("path")

const releaseModel = require("../models/release_model")
const projectModel = require("../models/project_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/release", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/release.ejs", {project: project})
    })
    
    app.post("/projectView/:projectId/createRelease", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
            
        const updateNbRelease = project.releases.length != 0 ? project.nbRelease + 1 : 1
        const rfile = req.files.releaseFile
        if (!rfile || Object.keys(rfile).length === 0) {
            return res.status(400).send("No file were uploaded.")
        }

        const releasePath = path.join(__dirname, "/../upload/releases/", req.params.projectId, "/")
        const releasePathFull = releasePath + rfile.name
                
        if (!fs.existsSync(releasePath)) {
            fs.mkdir(releasePath, function (err) {
                if (err) {
                    return res.status(500).send(err)
                }
            })
        }
                
        rfile.mv(releasePathFull, function(err) {
            if (err) {
                return res.status(500).send(err)
            }
        })
        const today = new Date()
        const date = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear()
        
        await releaseModel.updateReleaseNumber(db, ObjectId(req.params.projectId), updateNbRelease)
        
        await releaseModel.insertRelease(db, 
            ObjectId(req.params.projectId),
            updateNbRelease,
            req.body.title,
            req.body.description,
            rfile.name,
            date
        )
        res.redirect("/projectView/" + req.params.projectId + "/release")            
    })

    app.get("/projectView/:projectId/removeRelease/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        await releaseModel.deleteReleaseAtPos(db, project, req.params.pos)
        res.redirect("/projectView/"+req.params.projectId+"/release")
    })

    app.get("/projectView/:projectId/release/download/:filename", async (req, res) => {
        const p = path.join(__dirname, "../upload/releases/", req.params.projectId, req.params.filename)
        if (!fs.existsSync(p)) {
            return res.status(404).send("file not found")
        }
        res.download(p)
    })
}

module.exports = {
    init
}