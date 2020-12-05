function updateTaskNumber(db, projectId, taskNumber) {
    return db.collection("projects")
        .updateOne(
            { _id: projectId },
            { $set: { nbTask: taskNumber } },
            { upsert: true }
        )
        .catch(err => console.error(err))
}

function insertTask(
    db, 
    projectId, 
    taskId, 
    description,
    duree,
    dod,
    dep,
    usRef
) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        {
            $push: {
                task: {
                    id: taskId,
                    dep: dep,
                    description: description,
                    dod: dod,
                    usRef: usRef,
                    duree: duree,
                    etat: "TODO",
                },
            },
        })
        .catch(err => console.error(err))
}

function updateTaskByPos(
    db,
    projectId,
    taskPos,
    taskId,
    dep,
    description,
    dod,
    usRef,
    duree,
    etat
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $push:  {
            task: {
                $each: [{
                    id: taskId,
                    dep: dep,
                    description: description,
                    dod: dod,
                    usRef: usRef,
                    duree: duree,
                    etat: etat
                }],
                $position: taskPos
            } 
        }
        })
        .catch(err => console.error(err))
}

function deleteTaskByPos(db, project, pos) {
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {task:  project.task[pos]}}
    ).catch(err => console.error(err))
}




module.exports = {
    updateTaskNumber,
    insertTask,
    updateTaskByPos,
    deleteTaskByPos
}