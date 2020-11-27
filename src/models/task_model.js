function updateTaskNumber(db, projectId, taskNumber) {
    db.collection("projects")
        .updateOne(
            { _id: projectId },
            { $set: { nbTask: taskNumber } },
            { upsert: true }
        )
        .catch(err => console.error(err))
}

function insertTask(db, 
    projectId, 
    taskId, 
    description,
    duree,
    dod,
    dep
) {
    db.collection("projects").updateOne(
        { _id: projectId },
        {
            $push: {
                task: {
                    id: taskId,
                    dep: dep,
                    description: description,
                    dod: dod,
                    usRef: [],
                    duree: duree,
                    etat: "TODO",
                },
            },
        }
    )
        .catch(err => console.error(err))
}

module.exports = {
    updateTaskNumber,
    insertTask
}