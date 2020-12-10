const taskModel = require("./task_model")
/**
 * @namespace Model_UserStory
 */

/**
 * Create a new documentation object in database.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} title - Documentation title.
 * @param {string} content - Documentation content.
 * @param {string} date - Documentation date.
 * @param {string} release - Release version.
 */
function updateUserStoryNumber(db, projectId, userStoryNumber) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        { $set: { nbUs: userStoryNumber } },
        { upsert: true }
    )
        .catch(err => console.error(err))
}
/**
 * Create a new user story.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} id - US id.
 * @param {string} entantque - entantque field.
 * @param {string} jesouhaite - jesouhaite fild.
 * @param {string} afinde - afinde field.
 * @param {string} importance - US importance.
 * @param {Integer} difficulte - US difficulty.
 * @param {string} plannification - US plannification.
 */
function insertUserStory(
    db,
    projectId,
    id,
    entantque,
    jesouhaite,
    afinde,
    importance,
    difficulte,
    plannification
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $push: 
            { us: 
                {
                    id: id,
                    entantque: entantque,
                    jesouhaite: jesouhaite,
                    afinde: afinde,
                    importance: importance,
                    difficulte: difficulte,
                    plannification: plannification,
                    etat: "PLANIFIEE",
                    taskTotal: 0,
                    taskDone: 0
                }
            }
        }
    )
        .catch(error => console.error(error))
}
/**
 * Create a new user story at a specify position.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} id - US id.
 * @param {string} entantque - entantque field.
 * @param {string} jesouhaite - jesouhaite fild.
 * @param {string} afinde - afinde field.
 * @param {string} importance - US importance.
 * @param {Integer} difficulte - US difficulty.
 * @param {string} plannification - US plannification.
 * @param {Integer} pos - US position.
 * @param {Integer} taskTotal - total of task.
 * @param {Integer} taskDone - total of done task.
 */
function insertUserStoryAtPos(
    db,
    projectId,
    id,
    pos,
    entantque,
    jesouhaite,
    afinde,
    importance,
    difficulte,
    plannification,
    etat, 
    taskTotal,
    taskDone
) {
    return db.collection("projects").updateOne(
        { _id : projectId},
        { $push: { 
            us: {
                $each: [{
                    id: id,
                    entantque: entantque,
                    jesouhaite: jesouhaite,
                    afinde: afinde,
                    importance: importance,
                    difficulte: difficulte,
                    plannification: plannification,
                    etat: etat,
                    taskTotal: taskTotal,
                    taskDone: taskDone
                }],
                $position: pos
            }
        }
        }
    )
        .catch(error => console.error(error))
}
/**
 * Remove an US at a specify position.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} project - Project from database.
 * @param {Integer} pos - US position.
 */
function deleteUserStoryAtPos(db, project, pos) {
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {us:  project.us[pos]}}
    )
        .catch(error => console.error(error))
}
/**
 * Remove US present in an usRef task array.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} project - Project from database.
 * @param {Integer} pos - US position.
 */
function removeUsRefFromTask(db, project, objectId, pos){
    for(let i = 0; i<project.task.length; i++){
        for(let j=0; j<project.task[i].usRef.length; j++){
            if(project.task[i].usRef[j] == project.us[pos].id){
                const taskPos       = i
                const taskId        = project.task[taskPos].id
                const dep           = project.task[taskPos].dep
                const description   = project.task[taskPos].description
                const dod           = project.task[taskPos].dod
                let usRef           = project.task[taskPos].usRef
                usRef.splice(j,1)
                const duree         = project.task[taskPos].duree
                const etat          = project.task[taskPos].etat
                const taskTotal     = project.task[taskPos].taskTotal
                const taskDone      = project.task[taskPos].taskDone
                
                taskModel.updateTaskByPos(
                    db,
                    objectId,
                    taskPos,
                    taskId,
                    dep,
                    description,
                    dod,
                    usRef,
                    duree,
                    etat,
                    taskTotal,
                    taskDone
                )
                    .then((val) => {
                        console.log(val)
                    })
                break
            }
        }
    }
}
/**
 * Update state US.
 * @memberof Model_UserStory
 * @param {object} db - Database object.
 * @param {object} project - Project from database.
 * @param {Integer} usPos - US position.
 * @param {string} state - Task state.
 */
async function updateUSState(db, project, usPos, state){
    const id = project.us[usPos].id
    const entantque = project.us[usPos].entantque
    const jesouhaite = project.us[usPos].jesouhaite
    const afinde = project.us[usPos].afinde
    const importance = project.us[usPos].importance
    const difficulte = project.us[usPos].difficulte
    const plannification = project.us[usPos].plannification
    const taskTotal = project.us[usPos].taskTotal
    const taskDone = project.us[usPos].taskDone   
    
    await deleteUserStoryAtPos(db, project, usPos)
    return await insertUserStoryAtPos(
        db,
        project._id,
        id,
        usPos,
        entantque,
        jesouhaite,
        afinde,
        importance,
        difficulte,
        plannification,
        state,
        taskTotal,
        taskDone
    )
}


module.exports = {
    updateUserStoryNumber,
    insertUserStory,
    insertUserStoryAtPos,
    deleteUserStoryAtPos,
    removeUsRefFromTask,
    updateUSState
}