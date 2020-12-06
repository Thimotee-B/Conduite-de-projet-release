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

module.exports = {
    insertDoc
}