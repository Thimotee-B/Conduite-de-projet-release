const projectModel = require("../models/project_model")
const sprintModel = require("../models/sprint_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/sprint", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/sprint.ejs", {project: project})
    })

    app.post("/projectView/:projectId/createSprint", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const nbSprint = (project.sprint.length != 0) ? project.nbSprint+1 : 1
        await sprintModel.updateSprintNumber(db, ObjectId(req.params.projectId), nbSprint)
        await sprintModel.insertSprint(db, ObjectId(req.params.projectId), nbSprint, req.body.beginDate, req.body.description)
        res.redirect("/projectView/"+req.params.projectId+"/sprint")        
    })
}

module.exports = {
    init
}