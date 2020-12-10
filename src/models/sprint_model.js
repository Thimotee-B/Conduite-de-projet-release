/**
 * @namespace Model_Sprint
 */
/**
 * Update number of sprint in the project.
 * @memberof Model_Sprint
 * @param {object} db - Database object. 
 * @param {object} projectId - Project from database.
 * @param {Integer} nbSprint - New number of sprint.
 */
function updateSprintNumber(
    db, 
    projectId,
    nbSprint
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $set:  {nbSprint:  nbSprint}},
        { upsert: true}
    )
}
/**
 * Create a sprint.
 * @memberof Model_Sprint
 * @param {object} db - Database object. 
 * @param {object} projectId - Project from database.
 * @param {string} beginDate - Begin date of the sprint.
 * @param {string} description - Sprint description.
 */
function insertSprint(
    db, 
    projectId, 
    id, 
    beginDate, 
    description
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $push: 
            { sprint: 
                {
                    id: "Sprint " + id,
                    beginDate: beginDate,
                    description: description
                }
            }
        })
}

module.exports = {
    updateSprintNumber,
    insertSprint
}