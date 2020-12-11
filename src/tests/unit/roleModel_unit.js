const MongoClient = require("mongodb").MongoClient
const ObjectId = require("mongodb").ObjectID
const assert = require("assert")
const connectionString = "mongodb://127.0.0.1:27017"
const projectModel = require("../../models/project_model")
const roleModel = require("../../models/role_model")
const should = require("chai").should()

let client
let db

beforeEach(async function () {
    client = await MongoClient.connect(connectionString, { useUnifiedTopology: true })
    db = client.db("MAIN_DATABASE")
})
afterEach(async function () {
    client.close()
})

describe("Test RoleModel", function () {
    it("Changer le rôle", async function () {
        await projectModel.insertProject(db, "Name", "Description", "2", "10/12/2020", "10/12/2020")
        let projects = await projectModel.getAllProject(db)
        let projId = projects[projects.length - 1]._id
        let newRole = "Product Owner"
        await roleModel.updateUserRole(db, projId, newRole)
        let projById = await projectModel.getProjectId(db, projId)
        projById.role.should.equals(newRole)
    })
})