function init(app, db) {
    app.get("/projectList", (req, res) => {
        const cursor = db.collection("projects").find().toArray()
            .then(results => {
                res.render("pages/projectsList.ejs", { projectsList: results })
            })
            .catch(error => console.error(error))
    })
    
    app.post("/createNewProject", (req, res) => {
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
        db.collection("projects").insertOne(
            {
                projectName: req.body.projectName,
                projectDesc: req.body.desc,
                sprintDelay: req.body.sprintDelay,
                dateEnd: req.body.dateEnd,
                beginDate: today.toString(),
                role: "Scrum Master",
                nbMember: 1,
                us: [],
                sprint: [],
                nbUs: 0,
                nbSprint: 0
            }
        )
            .then(result => {
                res.redirect("/projectList")
            })
            .catch(error => console.error(error))
    })
}

module.exports = {
    init
}