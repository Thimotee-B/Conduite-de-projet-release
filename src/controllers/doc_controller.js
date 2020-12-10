const projectModel = require("../models/project_model")
const docModel = require("../models/doc_model")
/**
 * @namespace Controller_Documentation
 */

/**
 * Manage root on documentation page.
 * @memberof Controller_Documentation
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 * @param {function} ObjectId - Function from mongoDB.
*/
function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/doc", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/doc.ejs", {project: project})
    })

    app.post("/projectView/:projectId/createDoc", async (req, res) => {
        const projectId = ObjectId(req.params.projectId)
        const title = req.body.title
        const content = req.body.content
        const release = ""
        const today = new Date()
        const date = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear()
        await docModel.insertDoc(
            db,
            projectId,
            title,
            content,
            date,
            release
        )
        res.redirect("/projectView/" + req.params.projectId + "/doc")
    })

    app.get("/projectView/:projectId/removeDoc/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        await docModel.deleteDocAtPos(db, project, req.params.pos)
        res.redirect("/projectView/"+req.params.projectId+"/doc")
    })
}


module.exports = { init }