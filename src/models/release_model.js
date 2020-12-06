function updateReleaseNumber(
    db, 
    projectId, 
    releaseNumber, 
    nbReleaseMajeur,
    nbReleaseMineur,
    nbReleaseBug
) {

    return db.collection("projects")
        .updateOne(
            { _id: projectId },
            { $set: { nbRelease: releaseNumber,  nbReleaseMajeur: nbReleaseMajeur, nbReleaseMineur:nbReleaseMineur, nbReleaseBug:nbReleaseBug} },
            { upsert: true }
        )
        .catch(err => console.error(err))
}


function insertRelease(db, 
    projectId, 
    releaseId, 
    title,
    version,
    description,
    name,
    date
) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        {
            $push: {
                releases: {
                    id: releaseId,
                    title: title,
                    version: version,
                    description: description,
                    fileName: name,
                    link: "../upload/releases/" + projectId + "/" + name,
                    date: date
                },
            },
        }
    )
        .catch(err => console.error(err))
}

function deleteReleaseAtPos(db, project, pos) {
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {releases:  project.releases[pos]}}
    )
        .catch(error => console.error(error))
}

module.exports = {
    updateReleaseNumber,
    insertRelease,
    deleteReleaseAtPos
}