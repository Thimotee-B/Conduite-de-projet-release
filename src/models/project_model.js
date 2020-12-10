/**
 * @namespace Model_Project
 */

/**
 * Get all projects.
 * @memberof Model_Project
 * @param {object} db - Database object.
 */
function getAllProject(db) {
    return db.collection("projects").find().toArray()
        .catch(error => console.error(error))
}
/**
 * Get id of a project.
 * @memberof Model_Project
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 */
function getProjectId(db, projectId) {
    return db.collection("projects").findOne({ _id: projectId })
        .catch(error => console.error(error))
}
/**
 * Create a new project object in database.
 * @memberof Model_Project
 * @param {object} db - Database object.
 * @param {string} name - Project name.
 * @param {string} description - Project description.
 * @param {Integer} sprintDelay - Standard delay of a sprint.
 * @param {string} beginDate - Begin date of project.
 * @param {string} endDate - End date of project.
 */
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
/**
 * Update a project.
 * @memberof Model_Project
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} name - Project name.
 * @param {string} description - Project description.
 * @param {Integer} sprintDelay - Standard delay of a sprint.
 */
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
/**
 * Update end date of a project.
 * @memberof Model_Project
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} dateEnd - End date of project.
 */
function updateEndDate(
    db, 
    projectId,
    dateEnd
){
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $set:  
            {
                dateEnd: dateEnd,
            }
        },
        { upsert: true}
    ).catch(error => console.error(error))
}

module.exports = {
    getProjectId,
    getAllProject,
    insertProject,
    updateProject,
    updateEndDate
}