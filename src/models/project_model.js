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
    db.collection("projects").insertOne(
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
            releases: []
        }
    )
}

module.exports = {
    getProjectId,
    getAllProject,
    insertProject
}