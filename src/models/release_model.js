/**
 * @namespace Model_Release
 */
/**
 * Update the number of release.
 * @memberof Model_Release
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {Integer} releaseNumber - number total of release in the project.
 * @param {Integer} nbReleaseMajeur - Version number of major modifcations.
 * @param {Integer} nbReleaseMineur - Version number of minor modifcations.
 * @param {Integer} nbReleaseBug - Version number of fixing bug.
 */
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
/**
 * Create a release.
 * @memberof Model_Release
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} releaseId - Release id.
 * @param {string} title - Release title.
 * @param {string} version - Release version.
 * @param {string} description - Release description.
 * @param {string} name - Release name..
 * @param {string} date - Release date.
 */
function insertRelease(
    db, 
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
/**
 * Remove a release.
 * @memberof Model_Release
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {Integer} pos - Release position.
 */
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