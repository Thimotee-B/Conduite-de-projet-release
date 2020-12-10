/**
 * @namespace Model_Documentation
 */

/**
 * Create a new documentation object in database.
 * @memberof Model_Documentation
 * @param {object} db - Database object.
 * @param {object} projectId - Project from database.
 * @param {string} title - Documentation title.
 * @param {string} content - Documentation content.
 * @param {string} date - Documentation date.
 * @param {string} release - Release version.
 */
function insertDoc(db, 
    projectId, 
    title, 
    content,
    date,
    release
) {
    return db.collection("projects").updateOne(
        { _id: projectId },
        {
            $push: {
                doc: {
                    title: title,
                    content: content,
                    release: release,
                    date: date
                },
            },
        }
    )
        .catch(err => console.error(err))
}

/**
 * Remove a documentation.
 * @memberof Model_Documentation
 * @param {object} db - Database object.
 * @param {object} project - Project from database.
 * @param {Integer} pos - Documentation position.
 */
function deleteDocAtPos(db, project, pos) {
    return db.collection("projects").updateOne(
        { _id : project._id},
        { $pull:  {doc:  project.doc[pos]}}
    )
        .catch(error => console.error(error))
}

module.exports = {
    insertDoc,
    deleteDocAtPos
}