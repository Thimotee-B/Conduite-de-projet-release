function getReleaseFromProjectId(db, projectId) {
    return db.collection("projects").findOne({"_id": projectId})
        .catch(error => console.error(error))
}

function updateReleaseNumber(db, projectId, releaseNumber) {
    return db.collection("projects")
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
    return db.collection("projects")
        .updateOne(
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
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {releases:  project.releases[pos]}}
    )
        .catch(error => console.error(error))
}

module.exports = {
    getReleaseFromProjectId,
    updateReleaseNumber,
    insertRelease,
    deleteReleaseAtPos
}