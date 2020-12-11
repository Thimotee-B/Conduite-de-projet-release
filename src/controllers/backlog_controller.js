const projectModel = require("../models/project_model")
/**
 * @namespace Controller_Backlog
 */

/**
 * Redirect on backlog page.
 * @memberof Controller_Backlog
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 * @param {function} ObjectId - Function from mongoDB.
 */
function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/backlog", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/backlog.ejs", {project: project})
    })
}

module.exports = {
    init
}