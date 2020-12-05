const projectModel = require("../models/project_model")
const userStoryModel = require("../models/userStory_model")
const taskModel = require("../models/task_model")

function init(app, db, ObjectId) {
    app.post("/projectView/:projectId/createUS", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const updateNbUs = (project.us.length != 0) ? project.nbUs+1 : 1
        await userStoryModel.updateUserStoryNumber(db, ObjectId(req.params.projectId), updateNbUs)
        await userStoryModel.insertUserStory(
            db,
            ObjectId(req.params.projectId),
            updateNbUs.toString(),
            req.body.entantque,
            req.body.jesouhaite,
            req.body.afinde,
            req.body.importance,
            req.body.difficulte,
            req.body.plannification,
        )
        res.redirect("/projectView/"+req.params.projectId+"/backlog")
    })

    app.get("/projectView/:projectId/removeUS/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        await removeUsRefFromTask(db, project, req.params.projectId,req.params.pos)
        await userStoryModel.deleteUserStoryAtPos(db, project, req.params.pos)
        res.redirect("/projectView/"+req.params.projectId+"/backlog")
    })

    app.post("/projectView/:projectId/updateUS/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const usPos = parseInt(req.params.pos, 10)
        const usId = project.us[usPos].id
        const taskTotal = project.us[usPos].taskTotal
        const taskDone = project.us[usPos].taskDone

        await userStoryModel.deleteUserStoryAtPos(db, project, usPos)
        await userStoryModel.insertUserStoryAtPos(
            db,
            ObjectId(req.params.projectId),
            usId,
            usPos,
            req.body.entantque,
            req.body.jesouhaite,
            req.body.afinde,
            req.body.importance,
            req.body.difficulte,
            req.body.plannification,
            req.body.etat,
            taskTotal,
            taskDone
        )
        res.redirect("/projectView/"+req.params.projectId+"/backlog")
    })
}

async function removeUsRefFromTask(db, project, objectId, pos){
    for(let i = 0; i<project.task.length; i++){
        for(let j=0; j<project.task[i].usRef.length; j++){
            if(project.task[i].usRef[j] == project.us[pos].id){
                const taskPos       = i
                const taskId        = project.task[taskPos].id
                const dep           = project.task[taskPos].dep
                const description   = project.task[taskPos].description
                const dod           = project.task[taskPos].dod
                let usRef         = project.task[taskPos].usRef
                usRef.splice(j,1)
                const duree         = project.task[taskPos].duree
                const etat          = project.task[taskPos].etat
                const taskTotal     = project.task[taskPos].taskTotal
                const taskDone     = project.task[taskPos].taskDone
                await taskModel.deleteTaskByPos(db, project, taskPos)
                await taskModel.updateTaskByPos(
                    db,
                    objectId,
                    taskPos,
                    taskId,
                    dep,
                    description,
                    dod,
                    usRef,
                    duree,
                    etat,
                    taskTotal,
                    taskDone
                )
            }
        }
    }
}


module.exports = {
    init
}