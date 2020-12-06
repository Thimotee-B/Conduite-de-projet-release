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