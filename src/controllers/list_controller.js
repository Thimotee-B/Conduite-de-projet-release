const projectModel = require("../models/project_model")
/**
 * @namespace Controller_ProjectList
 */

/**
 * Manage root on projectList page.
 * @memberof Controller_ProjectList 
 * @param {function} app - Express application.
 * @param {object} db - Database object.
 */
function init(app, db) {
    app.get("/projectList", async (req, res) => {
        const projects = await projectModel.getAllProject(db)
        res.render("pages/projectsList.ejs", { projectsList: projects })
    })
    
    app.post("/createNewProject", async (req, res) => {
        const beginDate = getTodayDate()
        const endDate   = getEndDate(req.body.dateEnd)
        await projectModel.insertProject(
            db,
            req.body.projectName,
            req.body.projectDesc,
            req.body.sprintDelay,
            beginDate,
            endDate
        )
        res.redirect("/projectList")
    })
}

/**
 * Get current date and return it in dd/mm/yyyy format.
 * @memberof Controller_ProjectList 
 * @return {string} Current date.
 */
function getTodayDate(){
    let today = new Date() 
    let dd    = today.getDate() 
    let mm    = today.getMonth() + 1 
    let yyyy  = today.getFullYear() 
    
    if (dd < 10) { 
        dd = "0" + dd 
    }
    if (mm < 10) { 
        mm = "0" + mm 
    }
    today = dd + "/" + mm + "/" + yyyy 
    return today.toString()
}

/**
 * Get project end date.
 * @memberof Controller_ProjectList 
 * @param {date} string - Date from picker date format.
 * @return {string} Project end date.
 */
function getEndDate(date){
    let endDate = "-"
    if(date != ""){
        const endDateSplit = date.split("-")
        endDate = endDateSplit[2]+"/"+endDateSplit[1]+"/"+endDateSplit[0]
    }
    return endDate
}

module.exports = {
    init
}