function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/sprint", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render("pages/sprint.ejs", {project: results})
            })
            .catch(error => console.error(error))
        
    })

    // Création d'un nouveau Sprint
    app.post("/projectView/:projectId/createSprint", (req, res) => {
        console.log("ok1")
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const nbSprint = (results.sprint.length != 0) ? results.nbSprint+1 : 1
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $set:  {nbSprint:  nbSprint}},
                    { upsert: true}
                )
                    .then(result => {
                        const nbSprint = (results.sprint.length != 0) ? results.nbSprint+1 : 1
                        db.collection("projects").updateOne(
                            { _id : ObjectId(req.params.projectId)},
                            { $push: 
                        { sprint: 
                            {
                                id: "Sprint "+nbSprint
                            }
                        }
                            }
                        )
                            .then(result => {
                                res.redirect("/projectView/"+req.params.projectId+"/sprint")
                            })
                            .catch(error => console.error(error))
                    })
                    .catch(error => console.error(error))
            })
        
    })
}

module.exports = {
    init
}