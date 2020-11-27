function updateReleaseNumber(db, projectId, releaseNumber) {
    db.collection("projects")
        .updateOne(
            { _id: projectId },
            { $set: { nbRelease: releaseNumber } },
            { upsert: true }
        )
        .catch(err => console.error(err))
}

function insertRelease(db, 
    projectId, 
    releaseId, 
    title,
    description,
    name,
    date
) {
    db.collection("projects").updateOne(
        { _id: projectId },
        {
            $push: {
                releases: {
                    id: releaseId,
                    title: title,
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
    db.collection("projects").updateOne(
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