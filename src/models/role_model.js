function updateUserRole(db, projectId, roleName) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        { $set: { role: roleName} },
        { upsert: true }
    )
        .catch(err => console.error(err))
}



module.exports = {
    updateUserRole,
}