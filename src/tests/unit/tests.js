const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
const assert = require("assert")
const connectionString = "mongodb://127.0.0.1:27017"
const projectModel = require("../../models/project_model")


describe("on tests jsp", function () {
    it("Recupérer tous les projets", async function () {
        let client = await MongoClient.connect(connectionString, { useUnifiedTopology: true })
        let db = client.db("MAIN_DATABASE")
        projectModel.getAllProject(db)
            .then(function (projects) {
                console.log(projects)
                client.close()
            })
    })
})

//     MongoClient.connect(connectionString, { useUnifiedTopology: true })
//         .then(client => {
//             console.log("Connected to Database")
//             const db = client.db("MAIN_DATABASE")
//         })
// });

