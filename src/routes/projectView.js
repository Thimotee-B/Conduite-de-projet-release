function init(app, db, ObjectId) {
    app.get("/projectView/:projectId", (req, res) => {
        const cursor =  db.collection("projects").findOne({"_id":ObjectId(req.params.projectId)})
            .then(results => {
                res.render("pages/project.ejs", {project: results})
            })
            .catch(error => console.error(error))
        
    })
}

module.exports = {
    init
}