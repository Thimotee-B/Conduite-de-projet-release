const projectModel = require("../models/project_model")
const taskModel = require("../models/task_model")
const userStoryModel = require("../models/userStory_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/tasks", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/task.ejs", { project: project })
    })

    app.post("/projectView/:projectId/createTask", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const updateNbTask = project.task.length != 0 ? project.nbTask + 1 : 1
        await taskModel.updateTaskNumber(db, ObjectId(req.params.projectId), updateNbTask)
        console.log(project)
        await taskModel.insertTask(
            db,
            ObjectId(req.params.projectId),
            updateNbTask,
            req.body.description,
            req.body.duree,
            req.body.dod.split("/"),
            (req.body.dep == null ? [] : req.body.dep),
            (req.body.usRef == null ? [] : req.body.usRef),
        )
        updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), (req.body.usRef == null ? [] : req.body.usRef), 1, 0)
        
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
        const etat = project.task[taskPos].etat
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
        if(req.params.state == 'DONE'){
            updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, 0, 1)
        }else{
            if(etat == 'DONE'){
                updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, 0, -1)
            }

        }
        res.redirect("/projectView/" + req.params.projectId + "/tasks")
    })

    app.post("/projectView/:projectId/removeTask/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const taskPos = req.params.pos
        const usRef = project.task[taskPos].usRef
        const etat = project.task[taskPos].etat
        if(etat == 'DONE'){
            updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, -1,-1)
        }else{
            updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, -1, 0)
        }
        await taskModel.deleteTaskByPos(db, project, taskPos)
        res.redirect("/projectView/"+req.params.projectId+"/tasks")
    })
}


async function updateTaskInfoByUSRef(db, project, objectId, usRef, taskTotalToAdd, taskDoneToAdd){
    for(let x=0; x<usRef.length; x++){
        for(let i=0; i<project.us.length; i++){
            if(project.us[i].id == usRef[x]){
                const usId           = project.us[i].id
                const taskTotal      = project.us[i].taskTotal+taskTotalToAdd
                const taskDone       = project.us[i].taskDone+taskDoneToAdd
                const entantque      = project.us[i].entantque
                const jesouhaite     = project.us[i].jesouhaite
                const afinde         = project.us[i].afinde
                const importance     = project.us[i].importance
                const difficulte     = project.us[i].difficulte
                const plannification = project.us[i].plannification
                const etat           = project.us[i].etat

                await userStoryModel.deleteUserStoryAtPos(db, project, i)
                await userStoryModel.insertUserStoryAtPos(
                    db,
                    objectId,
                    usId,
                    i,
                    entantque,
                    jesouhaite,
                    afinde,
                    importance,
                    difficulte,
                    plannification,
                    etat,
                    taskTotal,
                    taskDone
                )
                break
            }
        }
    }
}


module.exports = {
    init,
}
