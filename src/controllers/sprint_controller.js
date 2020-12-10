const projectModel = require("../models/project_model")
const sprintModel = require("../models/sprint_model")
/**
 * @namespace Controller_Sprint
 */

/**
 * Manage sprint and redirect on sprint page.
 * @memberof Controller_Sprint
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 * @param {function} ObjectId - Function from mongoDB.
 */
function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/sprint", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/sprint.ejs", {project: project})
    })

    app.post("/projectView/:projectId/createSprint", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const nbSprint = (project.sprint.length != 0) ? project.nbSprint+1 : 1
        const endDate = req.body.beginDate.split("-")
        let date = formatDate(new Date(endDate).addDays(7*project.sprintDelay))
        await projectModel.updateEndDate(db, ObjectId(req.params.projectId), date)
        await sprintModel.updateSprintNumber(db, ObjectId(req.params.projectId), nbSprint)
        await sprintModel.insertSprint(db, ObjectId(req.params.projectId), nbSprint, req.body.beginDate, req.body.description)
        res.redirect("/projectView/"+req.params.projectId+"/sprint")        
    })
}

/**
 * Format date in dd/mm/yyyy format.
 * @memberof Controller_Sprint
 * @param {string} date to format. 
 * @return {string} formatted date.
 */
function formatDate(date){
    let dd    = date.getDate() 
    let mm    = date.getMonth() + 1 
    let yyyy  = date.getFullYear() 
    
    if (dd < 10) { 
        dd = "0" + dd 
    }
    if (mm < 10) { 
        mm = "0" + mm 
    }
    let formattedDate = dd + "/" + mm + "/" + yyyy 
    return formattedDate.toString()
}

/**
 * Function to add a number of days on a day.
 * @memberof Controller_Sprint
 * @param {Integer} The days number to add. 
 * @return {Date} computed date.
 */
Date.prototype.addDays = function(days) {
    let date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

module.exports = {
    init
}