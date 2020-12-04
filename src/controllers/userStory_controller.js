const projectModel = require("../models/project_model")
const userStoryModel = require("../models/userStory_model")

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


module.exports = {
    init
}