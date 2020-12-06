const projectModel = require("../models/project_model")
const docModel = require("../models/doc_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/doc", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/doc.ejs", {project: project})
    })

    app.post("/projectView/:projectId/doc", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))

        const projectId = ObjectId(req.params.projectId)
        const title = req.body.title
        const content = req.body.content
        const release = "" // TODO: récupérer la current release ou truc comme ça
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
        res.render("pages/doc.ejs", {project: project})
    })
}


module.exports = { init }