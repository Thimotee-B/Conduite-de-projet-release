const roleModel = require("../models/role_model")
/**
 * @namespace Controller_Role
 */

/**
 * Update role and redirect on the sender page.
 * @memberof Controller_Role
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 * @param {function} ObjectId - Function from mongoDB.
 */
function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/updateRole/:role/:redirection", async(req, res) => {
        await roleModel.updateUserRole(db, ObjectId(req.params.projectId), decodeURI(req.params.role))
        res.redirect("/projectView/"+req.params.projectId+"/"+decodeURI(req.params.redirection))
    })
}

module.exports = {
    init
}