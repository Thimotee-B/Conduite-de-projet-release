function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/tasks", (req, res) => {
    // project db
        const cursor = db
            .collection("projects")
            .findOne({ _id: ObjectId(req.params.projectId) })
            .then((projectResults) => {
                // task db
                const cursor = db.collection("tasks").find().toArray()
                    .then((taskResults) => {
                        res.render("pages/task.ejs", {
                            project: projectResults,
                            taskList: taskResults,
                        })
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    })


    app.get("/projectView/:projectId/tasks/:taskPos/updateState/:state", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const taskPos = parseInt(req.params.taskPos,10)
                const taskId = results.task[taskPos].id
                const dep = results.task[taskPos].dep
                const description = results.task[taskPos].description
                const dod = results.task[taskPos].dod
                const usRef = results.task[taskPos].usRef
                const duree = results.task[taskPos].duree
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {task:  results.task[taskPos]}}
                )
                    .then(result => {
                        db.collection("projects").updateOne(
                            { _id : ObjectId(req.params.projectId)},
                            { $push:  {
                                task: {
                                    $each: [{
                                        id: taskId,
                                        dep: dep,
                                        description: description,
                                        dod: dod,
                                        usRef: usRef,
                                        duree: duree,
                                        etat: req.params.state
                                    }],
                                    $position: taskPos
                                } 
                            }
                            })
                            .then(results =>{
                                res.redirect("/projectView/" + req.params.projectId + "/tasks")
                            })
                    })
                    .catch(error => console.error(error))
            })
    })


    app.post("/projectView/:projectId/createTask", (req, res) => {
        // Récupère le projet
        const cursor = db.collection("projects").findOne({ _id: ObjectId(req.params.projectId) })
            .then((projectResult) => {
                const updateNbTask = projectResult.task.length != 0 ? projectResult.nbTask + 1 : 1
                const dod = req.body.dod.split("/")
                //Maj nbTask dans projects
                db.collection("projects")
                    .updateOne(
                        { _id: ObjectId(req.params.projectId) },
                        { $set: { nbTask: updateNbTask } },
                        { upsert: true }
                    )
                    .then((result) => {
                        db.collection("projects")
                            .updateOne(
                                { _id: ObjectId(req.params.projectId) },
                                {
                                    $push: {
                                        task: {
                                            id: updateNbTask,
                                            dep: req.body.dep,
                                            description: req.body.description,
                                            dod: dod,
                                            usRef: req.body.usRef,
                                            duree: req.body.duree,
                                            etat: "TODO",
                                        },
                                    },
                                }
                            )
                            .then((result) => {
                                res.redirect("/projectView/" + req.params.projectId + "/tasks")
                            })
                            .catch((error) => console.error(error))
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => console.error(error))
    })


    app.post("/projectView/:projectId/removeTask/:pos", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const taskPos = req.params.pos
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {task:  results.task[taskPos]}}
                )
                    .then(result => {
                        res.redirect("/projectView/"+req.params.projectId+"/tasks")
                    })
                    .catch(error => console.error(error))
            })
    })
}

module.exports = {
    init,
}
