const projectModel = require("../models/project_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/project.ejs", {project: project})
        
    })
}

module.exports = {
    init
}