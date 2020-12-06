const projectModel = require("../models/project_model")
const docModel = require("../models/doc_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/doc", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/doc.ejs", {project: project})
    })

    app.post("/projectView/:projectId/createDoc", async (req, res) => {
        const projectId = ObjectId(req.params.projectId)
        const title = req.body.title
        const content = req.body.content
        // TODO: récupérer la current release ou truc comme ça
        const release = ""
        const today = new Date()
        const date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear()
        await docModel.insertDoc(
            db,
            projectId,
            title,
            content,
            date,
            release
        )
        res.redirect("/projectView/" + req.params.projectId + "/doc")
    })

    app.get("/projectView/:projectId/removeDoc/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        await docModel.deleteDocAtPos(db, project, req.params.pos)
        res.redirect("/projectView/"+req.params.projectId+"/doc")
    })
}


module.exports = { init }