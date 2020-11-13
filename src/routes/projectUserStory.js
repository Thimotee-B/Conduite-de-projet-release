function init(app, db, ObjectId) {
    app.post("/projectView/:projectId/createUS", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const updateNbUs = (results.us.length != 0) ? results.nbUs+1 : 1
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $set:  {nbUs:  updateNbUs}},
                    { upsert: true}
                )
                    .then(result => {
                        const updateNbUs = (results.us.length != 0) ? results.nbUs+1 : 1
                        db.collection("projects").updateOne(
                            { _id : ObjectId(req.params.projectId)},
                            { $push: 
                        { us: 
                            {
                                entantque: req.body.entantque,
                                jesouhaite: req.body.jesouhaite,
                                afinde: req.body.afinde,
                                importance: req.body.importance,
                                difficulte: req.body.difficulte,
                                plannification: req.body.plannification,
                                id: updateNbUs
                            }
                        }
                            }
                        )
                            .then(result => {
                                res.redirect("/projectView/"+req.params.projectId+"/backlog")
                            })
                            .catch(error => console.error(error))
                    })
                    .catch(error => console.error(error))
            })
        
    })

    app.get("/projectView/:projectId/removeUS/:pos", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const usPos = req.params.pos
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {us:  results.us[usPos]}}
                )
                    .then(result => {
                        res.redirect("/projectView/"+req.params.projectId+"/backlog")
                    })
                    .catch(error => console.error(error))
            })
    })

    app.post("/projectView/:projectId/updateUS/:pos", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                const usPos = parseInt(req.params.pos,10)
                const usId = results.us[usPos].id
                db.collection("projects").updateOne(
                    { _id : ObjectId(req.params.projectId)},
                    { $pull:  {us:  results.us[usPos]}}
                )
                    .then(result => {
                        db.collection("projects").updateOne(
                            { _id : ObjectId(req.params.projectId)},
                            { $push:  {
                                us: {
                                    $each: [{
                                        entantque: req.body.entantque,
                                        jesouhaite: req.body.jesouhaite,
                                        afinde: req.body.afinde,
                                        importance: req.body.importance,
                                        difficulte: req.body.difficulte,
                                        plannification: req.body.plannification,
                                        id: usId
                                    }],
                                    $position: usPos
                                } 
                            }
                            })
                            .then(results =>{
                                res.redirect("/projectView/"+req.params.projectId+"/backlog")
                            })
                    })
                    .catch(error => console.error(error))
            })
    })
}

module.exports = {
    init
}