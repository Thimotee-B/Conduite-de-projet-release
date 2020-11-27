const projectModel = require("../models/project_model")
const taskModel = require("../models/task_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/tasks", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/task.ejs", { project: project })
    })

    app.post("/projectView/:projectId/createTask", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const updateNbTask = project.task.length != 0 ? project.nbTask + 1 : 1
        await taskModel.updateTaskNumber(db, ObjectId(req.params.projectId), updateNbTask)
        
        await taskModel.insertTask(
            db,
            ObjectId(req.params.projectId),
            updateNbTask,
            req.body.description,
            req.body.duree,
            req.body.dod.split("/"),
            req.body.dep
        )
        res.redirect("/projectView/" + req.params.projectId + "/tasks")
    })

    app.get("/projectView/:projectId/tasks/:taskPos/updateState/:state", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        
        const taskPos = parseInt(req.params.taskPos,10)
        const taskId = project.task[taskPos].id
        const dep = project.task[taskPos].dep
        const description = project.task[taskPos].description
        const dod = project.task[taskPos].dod
        const usRef = project.task[taskPos].usRef
        const duree = project.task[taskPos].duree

        await taskModel.deleteTaskByPos(db, project, taskPos)
        await taskModel.updateTaskByPos(
            db,
            ObjectId(req.params.projectId),
            taskPos,
            taskId,
            dep,
            description,
            dod,
            usRef,
            duree,
            req.params.state
        )

        res.redirect("/projectView/" + req.params.projectId + "/tasks")
    })

    app.post("/projectView/:projectId/removeTask/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const taskPos = req.params.pos
        await taskModel.deleteTaskByPos(db, project, taskPos)
        res.redirect("/projectView/"+req.params.projectId+"/tasks")
    })
}

module.exports = {
    init,
}
