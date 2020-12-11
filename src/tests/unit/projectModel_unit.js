const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
const assert = require("assert")
const connectionString = "mongodb://127.0.0.1:27017"
const projectModel = require("../../models/project_model")
const should = require("chai").should()

let client
let db

beforeEach(async function(){
    client = await MongoClient.connect(connectionString, { useUnifiedTopology: true })
    db = client.db("MAIN_DATABASE")
})
afterEach(async function(){
    client.close()
})

describe("Test projectModel", function () {
    it("Recupérer tous les projets", async function () {
        let projects = await projectModel.getAllProject(db)
        projects.should.have.lengthOf.at.least(0)
    })
    it("Ajouter un projet", async function () {
        let projectsBefore = await projectModel.getAllProject(db)
        await projectModel.insertProject(db, "Name", "Description", "2", "10/12/2020", "10/12/2020")
        let projectsAfter = await projectModel.getAllProject(db)
        projectsBefore.should.have.lengthOf(projectsAfter.length - 1)
    })
    it("Recupérer un projet par ID", async function () {
        await projectModel.insertProject(db, "Name", "Description", "2", "10/12/2020", "10/12/2020")
        let projects = await projectModel.getAllProject(db)
        let projectID = await projectModel.getProjectId(db, projects[projects.length - 1]._id)
        projects[projects.length-1].should.deep.equal(projectID)
        
    })
    it("Modifier un projet", async function(){
        await projectModel.insertProject(db, "Name", "Description", "2", "10/12/2020", "10/12/2020")
        let projects = await projectModel.getAllProject(db)
        let id = projects[projects.length - 1]._id
        let newName="newName"
        let newDesc="newDesc"
        let newSprint="5"
        await projectModel.updateProject(db, id, newName, newDesc, newSprint)
        let projectID = await projectModel.getProjectId(db, id)
        projectID.projectName.should.equal(newName)
        projectID.projectDesc.should.equal(newDesc)
        projectID.sprintDelay.should.equal(newSprint)
    })
})


//     MongoClient.connect(connectionString, { useUnifiedTopology: true })
//         .then(client => {
//             console.log("Connected to Database")
//             const db = client.db("MAIN_DATABASE")
//         })
// });

