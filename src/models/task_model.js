/**
 * @namespace Model_Task
 */
/**
 * Update the number of task.
 * @memberof Model_Task
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {Integer} taskNumber - number total of task in the project.
 */
function updateTaskNumber(
    db, 
    projectId, 
    taskNumber
) {
    return db.collection("projects")
        .updateOne(
            { _id: projectId },
            { $set: { nbTask: taskNumber } },
            { upsert: true }
        )
        .catch(err => console.error(err))
}
/**
 * Create a new task.
 * @memberof Model_Task
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} taskId - Task id.
 * @param {string} description - Task description.
 * @param {Integer} duree - Task period.
 * @param {string} dod - Definition of done.
 * @param {Array} dep - List of dependent tasks id.
 * @param {Array} usRef - List of refered US id.
 */
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
/**
 * Update a task.
 * @memberof Model_Task
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {Integer} taskPos - Task position.
 * @param {string} taskId - Task id.
 * @param {string} description - Task description.
 * @param {Integer} duree - Task period.
 * @param {string} dod - Definition of done.
 * @param {Array} dep - List of dependent tasks id.
 * @param {Array} usRef - List of refered US id.
 * @param {string} etat - Task state.
 */
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
/**
 * Remove a task.
 * @memberof Model_Task
 * @param {object} db - Database object.
 * @param {object} project - Project from database.
 * @param {Integer} pos - Task position.
 */
function deleteTaskByPos(
    db, 
    project,
    pos
) {
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