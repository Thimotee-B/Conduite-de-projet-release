const roleModel = require("../models/role_model")

function init(app, db, ObjectId) {
    
    app.get("/projectView/:projectId/updateRole/:role/:redirection", async(req, res) => {
        const project = await roleModel.updateUserRole(db, ObjectId(req.params.projectId), decodeURI(req.params.role))
        res.redirect("/projectView/"+req.params.projectId+"/"+decodeURI(req.params.redirection))
    })
}

module.exports = {
    init
}