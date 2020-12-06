const taskModel = require("./task_model")

function updateUserStoryNumber(db, projectId, userStoryNumber) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        { $set: { nbUs: userStoryNumber } },
        { upsert: true }
    )
        .catch(err => console.error(err))
}

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
                    etat: "FERMEE",
                    taskTotal: 0,
                    taskDone: 0
                }
            }
        }
    )
        .catch(error => console.error(error))
}

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

function deleteUserStoryAtPos(db, project, pos) {
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {us:  project.us[pos]}}
    )
        .catch(error => console.error(error))
}

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
                console.log(usRef)
                usRef.splice(j,1)
                console.log(usRef)
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
                break;
            }
        }
    }
}


module.exports = {
    updateUserStoryNumber,
    insertUserStory,
    insertUserStoryAtPos,
    deleteUserStoryAtPos,
    removeUsRefFromTask
}