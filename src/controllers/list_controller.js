const projectModel = require("../models/project_model")

function init(app, db) {
    app.get("/projectList", async (req, res) => {
        const projects = await projectModel.getAllProject(db)
        res.render("pages/projectsList.ejs", { projectsList: projects })
    })
    
    app.post("/createNewProject", async (req, res) => {
        let today = new Date() 
        let dd = today.getDate() 
        let mm = today.getMonth() + 1 
        let yyyy = today.getFullYear() 
        if (dd < 10) { 
            dd = "0" + dd 
        }
        if (mm < 10) { 
            mm = "0" + mm 
        }
        today = dd + "/" + mm + "/" + yyyy 
        let endDate = "-"
        if(req.body.dateEnd != ""){
            const endDateSplit = req.body.dateEnd.split("-")
            endDate = endDateSplit[2]+"/"+endDateSplit[1]+"/"+endDateSplit[0]
        }
        await projectModel.insertProject(
            db,
            req.body.projectName,
            req.body.projectDesc,
            req.body.sprintDelay,
            today.toString(),
            endDate
        )
        
        res.redirect("/projectList")
    })
}

module.exports = {
    init
}