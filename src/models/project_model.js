function getProjectId(db, projectId) {
    return db.collection("projects").findOne({ _id: projectId })
        .catch(error => console.error(error))
}

module.exports = {
    getProjectId
}