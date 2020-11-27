const projectModel = require("../models/project_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/backlog", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/backlog.ejs", {project: project})
    })
}

module.exports = {
    init
}