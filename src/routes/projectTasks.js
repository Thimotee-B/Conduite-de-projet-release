function init(app, db, ObjectId) {
    app.get('/projectView/:projectId/tasks', (req, res) => {
        const cursor =  db.collection('projects').findOne({"_id":ObjectId(req.params.projectId)})
        .then(results => {
            res.render('pages/task.ejs', {project: results})
        })
        .catch(error => console.error(error))
    })
}

module.exports = {
    init
}