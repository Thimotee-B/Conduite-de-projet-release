const projectModel = require("../models/project_model")
/**
 * @namespace Controller_view
 */

/**
 * Manage project and redirect on dashboad page.
 * @memberof Controller_view
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 * @param {function} ObjectId - Function from mongoDB.
 */
function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/accueil", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/project.ejs", {project: project})
        
    })
    app.post("/projectView/:projectId/updateProject", async (req, res) => {
        await projectModel.updateProject(
            db, 
            ObjectId(req.params.projectId), 
            req.body.projectName, 
            req.body.projectDesc, 
            req.body.sprintDelay)
        res.redirect("/projectView/"+req.params.projectId+"/accueil")
        
    })
}

module.exports = {
    init
}