function updateSprintNumber(db, projectId, nbSprint) {
    db.collection("projects").updateOne(
        { _id : projectId},
        { $set:  {nbSprint:  nbSprint}},
        { upsert: true}
    )
}

function insertSprint(db, projectId, id, beginDate, description) {
    db.collection("projects").updateOne(
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