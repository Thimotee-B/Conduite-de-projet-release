function getAllProject(db) {
    return db.collection("projects").find().toArray()
        .catch(error => console.error(error))
}

function getProjectId(db, projectId) {
    return db.collection("projects").findOne({ _id: projectId })
        .catch(error => console.error(error))
}

function insertProject(
    db,
    name,
    description,
    sprintDelay,
    beginDate,
    endDate,
) {
    return db.collection("projects").insertOne(
        {
            projectName: name,
            projectDesc: description,
            sprintDelay: sprintDelay,
            beginDate: beginDate,
            dateEnd: endDate,
            role: "Scrum Master",
            roleList: ["Scrum Master","Product Owner", "Développeur","Utilisateur"],
            nbMember: 1,
            us: [],
            sprint: [],
            nbUs: 0,
            nbSprint: 0,
            nbTask: 0,
            task: [],
            nbRelease: 0,
            nbReleaseMajeur: 0,
            nbReleaseMineur: 0,
            nbReleaseBug: 0,
            releases: [],
            doc: []
        }
    )
}

function updateProject(
    db,
    projectId, 
    name,
    description,
    sprintDelay
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $set:  
            {
                projectName: name,
                projectDesc: description,
                sprintDelay: sprintDelay
            }
        },
        { upsert: true}
    ).catch(error => console.error(error))
}




module.exports = {
    getProjectId,
    getAllProject,
    insertProject,
    updateProject
}