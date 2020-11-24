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

    app.post("/projectView/:projectId/createTask", (req, res) => {
        // Récupère le projet
        const cursor = db.collection("projects").findOne({ _id: ObjectId(req.params.projectId) })
            .then((projectResult) => {
                const updateNbTask = projectResult.task.length != 0 ? projectResult.nbTask + 1 : 1
                //Maj nbTask dans projects
                db.collection("projects")
                    .updateOne(
                        { _id: ObjectId(req.params.projectId) },
                        { $set: { nbTask: updateNbTask } },
                        { upsert: true }
                    )
                    .then((result) => {
                    // Créer la task dans tasks
                        const dod = req.body.dod.split("/")
                        db.collection("tasks")
                            .insertOne({
                                id: updateNbTask,
                                dep: req.body.dep,
                                description: req.body.description,
                                dod: dod,
                                usRef: [],
                                duree: req.body.duree,
                                dep: req.body.dep,
                                etat: "TODO",
                            })
                            .then((taskResults) => {
                                db.collection("projects")
                                    .updateOne(
                                        { _id: ObjectId(req.params.projectId) },
                                        {
                                            $push: {
                                                task: {
                                                    id: updateNbTask,
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
            .catch((error) => console.error(error))
    })
}

module.exports = {
    init,
}
