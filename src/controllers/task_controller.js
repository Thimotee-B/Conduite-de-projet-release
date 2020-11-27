const projectModel = require("../models/project_model")
const taskModel = require("../models/task_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/tasks", async (req, res) => {
        // project db
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/task.ejs", { project: project })
    })

    app.post("/projectView/:projectId/createTask", async (req, res) => {
        // Récupère le projet
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const updateNbTask = project.task.length != 0 ? project.nbTask + 1 : 1
        await taskModel.updateTaskNumber(db, ObjectId(req.params.projectId), updateNbTask)
        
        const dod = req.body.dod.split("/")
        await taskModel.insertTask(
            db,
            ObjectId(req.params.projectId),
            updateNbTask,
            req.body.description,
            req.body.duree,
            dod,
            req.body.dep
        )
        res.redirect("/projectView/" + req.params.projectId + "/tasks")
    })
}

module.exports = {
    init,
}
