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
                    etat: "PLANIFIEE",
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
    updateUSState
}