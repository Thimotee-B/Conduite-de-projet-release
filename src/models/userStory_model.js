function updateUserStoryNumber(db, projectId, userStoryNumber) {
    db.collection("projects").updateOne(
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
    db.collection("projects").updateOne(
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
                    etat: "FERMEE"
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
    etat
) {
    db.collection("projects").updateOne(
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
                    etat: etat
                }],
                $position: pos
            }
        }
        }
    )
        .catch(error => console.error(error))
}

function deleteUserStoryAtPos(db, project, pos) {
    db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {us:  project.us[pos]}}
    )
        .catch(error => console.error(error))
}

module.exports = {
    updateUserStoryNumber,
    insertUserStory,
    insertUserStoryAtPos,
    deleteUserStoryAtPos
}