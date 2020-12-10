/**
 * @namespace Model_Role
 */

/**
 * Update role of the user.
 * @memberof Model_Role
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} roleName - The new role name.
 */
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