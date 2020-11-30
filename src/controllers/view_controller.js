const projectModel = require("../models/project_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/accueil", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/project.ejs", {project: project})
        
    })
    app.post("/projectView/:projectId/updateProject", async (req, res) => {
        const project = await projectModel.updateProject(
            db, 
            ObjectId(req.params.projectId), 
            req.body.projectName, 
            req.body.projectDesc, 
            req.body.sprintDelay)
        res.redirect("/projectView/"+req.params.projectId+"/accueil")
        
    })
}

module.exports = {
    init
}